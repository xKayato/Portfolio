import React, { useRef, useState, useEffect, useCallback } from 'react';
import { X, Minus, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WindowId, useWindowManager } from './useWindowManager';
import { useIsMobile } from '@/hooks/use-mobile';

interface WindowProps {
  id: WindowId;
  title: string;
  children: React.ReactNode;
  isFocused: boolean;
  initialX: number;
  initialY: number;
  initialWidth: number;
  initialHeight: number;
  // Nouvelle prop pour la position de défilement
  scrollPosition: number; 
}

const MIN_WIDTH = 300;
const MIN_HEIGHT = 200;

export const Window = ({ id, title, children, isFocused, initialX, initialY, initialWidth, initialHeight, scrollPosition }: WindowProps) => {
  const { closeWindow, minimizeWindow, focusWindow, updateWindowPosition, updateWindowSize, updateWindowScroll } = useWindowManager();
  const windowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null); // Référence à la div de contenu défilable
  const isMobile = useIsMobile();

  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState<string | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [prevSize, setPrevSize] = useState({ width: 0, height: 0 });

  // 1. Mise à jour de l'état local à partir des props
  useEffect(() => {
    setPosition({ x: initialX, y: initialY });
    setSize({ width: initialWidth, height: initialHeight });
  }, [initialX, initialY, initialWidth, initialHeight]);

  // 2. Restauration de la position de défilement lors du montage/focus
  useEffect(() => {
    if (contentRef.current && !isMaximized) {
      // Appliquer la position de défilement stockée
      contentRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition, isMaximized, isFocused]); // Déclencher lors du changement de focus ou de la restauration

  // 3. Sauvegarde de la position de défilement lors du défilement
  const handleScroll = useCallback(() => {
    if (contentRef.current) {
      updateWindowScroll(id, contentRef.current.scrollTop);
    }
  }, [id, updateWindowScroll]);


  const handleMouseDown = (e: React.MouseEvent) => {
    // Empêche le défilement automatique et le comportement par défaut
    e.preventDefault(); 
    e.stopPropagation(); 

    if (isMobile) return;
    focusWindow(id);
    
    const target = e.target as HTMLElement;
    
    // Check if resizing handle was clicked
    const resizeHandle = target.closest('[data-resize-handle]');
    if (resizeHandle) {
      setIsResizing(resizeHandle.getAttribute('data-resize-handle'));
      return;
    }

    // Check if title bar was clicked (excluding buttons)
    const titleBar = target.closest('[data-title-bar]');
    if (titleBar && !target.closest('button')) {
      setIsDragging(true);
    }
  };

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore
      setPosition(prevPosition);
      setSize(prevSize);
      setIsMaximized(false);
    } else {
      // Maximize
      setPrevPosition(position);
      setPrevSize(size);
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight - 40 }); // Subtract taskbar height
      setIsMaximized(true);
    }
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && !isMaximized) {
      setPosition(prev => {
        const newX = prev.x + e.movementX;
        const newY = prev.y + e.movementY;
        return { x: newX, y: newY };
      });
    } else if (isResizing && !isMaximized) {
      setSize(prev => {
        let newWidth = prev.width;
        let newHeight = prev.height;
        // let newX = position.x; // Not used for bottom/right resizing
        // let newY = position.y; // Not used for bottom/right resizing

        switch (isResizing) {
          case 'right':
            newWidth = Math.max(MIN_WIDTH, prev.width + e.movementX);
            break;
          case 'bottom':
            newHeight = Math.max(MIN_HEIGHT, prev.height + e.movementY);
            break;
          case 'bottom-right':
            newWidth = Math.max(MIN_WIDTH, prev.width + e.movementX);
            newHeight = Math.max(MIN_HEIGHT, prev.height + e.movementY);
            break;
          // Note: Implementing top/left resizing is more complex as it requires changing position as well.
          // For simplicity, we focus on bottom/right handles for now.
        }

        return { width: newWidth, height: newHeight };
      });
    }
  }, [isDragging, isResizing, isMaximized, position.x, position.y]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      updateWindowPosition(id, position.x, position.y);
    }
    if (isResizing) {
      setIsResizing(null);
      updateWindowSize(id, size.width, size.height);
    }
  }, [isDragging, isResizing, id, position.x, position.y, size.width, size.height, updateWindowPosition, updateWindowSize]);

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

  // Z-index management: focused window gets the highest z-index
  const zIndex = isFocused ? 1000 : 999;

  // Style for the window container
  const windowStyle: React.CSSProperties = isMaximized ? {
    top: 0,
    left: 0,
    width: '100vw',
    height: 'calc(100vh - 40px)', // Account for taskbar
    zIndex: zIndex,
  } : {
    top: position.y,
    left: position.x,
    width: size.width,
    height: size.height,
    zIndex: zIndex,
  };

  return (
    <div
      ref={windowRef}
      className={cn(
        "fixed bg-card border border-border shadow-2xl flex flex-col transition-opacity duration-200",
        "rounded-lg overflow-hidden",
        isDragging && "cursor-grabbing",
        isResizing && "cursor-crosshair",
        isMobile && "w-full h-full top-0 left-0", // Full screen on mobile
      )}
      style={windowStyle}
      onMouseDown={handleMouseDown}
      tabIndex={-1} // Rendre la div focusable sans être dans l'ordre de tabulation
    >
      {/* Title Bar */}
      <div 
        className={cn(
          "flex justify-between items-center h-8 px-2 text-sm font-medium select-none",
          isFocused ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
          !isMaximized && "cursor-grab"
        )}
        onDoubleClick={handleMaximize}
        data-title-bar
      >
        <span>{title}</span>
        
        {/* Control Buttons */}
        <div className="flex space-x-1">
          <button 
            className="p-1 hover:bg-primary-foreground/20 rounded"
            onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
            title="Minimize"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button 
            className="p-1 hover:bg-primary-foreground/20 rounded"
            onClick={(e) => { e.stopPropagation(); handleMaximize(); }}
            title={isMaximized ? "Restore Down" : "Maximize"}
          >
            {isMaximized ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </button>
          <button 
            className="p-1 hover:bg-red-600 hover:text-white rounded"
            onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
            title="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div 
        ref={contentRef}
        className="flex-grow overflow-y-auto bg-background"
        onScroll={handleScroll}
      >
        {children}
      </div>

      {/* Resize Handles (Desktop only) */}
      {!isMaximized && !isMobile && (
        <>
          {/* Bottom Right Corner */}
          <div 
            className="absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize" 
            data-resize-handle="bottom-right"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Right Edge */}
          <div 
            className="absolute right-0 top-0 h-full w-1 cursor-ew-resize" 
            data-resize-handle="right"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Bottom Edge */}
          <div 
            className="absolute bottom-0 left-0 w-full h-1 cursor-ns-resize" 
            data-resize-handle="bottom"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
        </>
      )}
    </div>
  );
};