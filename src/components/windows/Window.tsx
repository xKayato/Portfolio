import React, { useRef, useState, useEffect, useCallback } from 'react';
import { X, Minus, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WindowId, useWindowManager, WINDOW_CONFIGS } from './useWindowManager';
import { useIsMobile } from '@/hooks/use-mobile';
import { Logo } from '../Logo'; // Importation du Logo

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
      
      // Utiliser les fonctions de mise à jour d'état pour obtenir les valeurs les plus récentes
      setSize(prevSize => {
        setPosition(prevPos => {
          let newWidth = prevSize.width;
          let newHeight = prevSize.height;
          let newX = prevPos.x;
          let newY = prevPos.y;

          const movementX = e.movementX;
          const movementY = e.movementY;

          // Redimensionnement horizontal
          if (isResizing.includes('left')) {
            const potentialNewWidth = prevSize.width - movementX;
            if (potentialNewWidth >= MIN_WIDTH) {
              newWidth = potentialNewWidth;
              newX = prevPos.x + movementX;
            } else {
              // Si on atteint la taille minimale, on ajuste la position pour éviter le dépassement
              newX = prevPos.x + (prevSize.width - MIN_WIDTH);
              newWidth = MIN_WIDTH;
            }
          } else if (isResizing.includes('right')) {
            newWidth = Math.max(MIN_WIDTH, prevSize.width + movementX);
          }

          // Redimensionnement vertical
          if (isResizing.includes('top')) {
            const potentialNewHeight = prevSize.height - movementY;
            if (potentialNewHeight >= MIN_HEIGHT) {
              newHeight = potentialNewHeight;
              newY = prevPos.y + movementY;
            } else {
              // Si on atteint la taille minimale, on ajuste la position
              newY = prevPos.y + (prevSize.height - MIN_HEIGHT);
              newHeight = MIN_HEIGHT;
            }
          } else if (isResizing.includes('bottom')) {
            newHeight = Math.max(MIN_HEIGHT, prevSize.height + movementY);
          }
          
          // Retourner la nouvelle position et la nouvelle taille
          // Note: React mettra à jour les deux états dans le même cycle de rendu
          setSize({ width: newWidth, height: newHeight });
          return { x: newX, y: newY };
        });
        
        // Retourner l'ancienne taille ici car la nouvelle taille est définie dans le callback setPosition
        return prevSize; 
      });
    }
  }, [isDragging, isResizing, isMaximized]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      updateWindowPosition(id, position.x, position.y);
    }
    if (isResizing) {
      setIsResizing(null);
      // Sauvegarder la position et la taille finales
      updateWindowPosition(id, position.x, position.y); 
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
  
  // Récupérer l'icône de la fenêtre
  const config = WINDOW_CONFIGS[id] || { icon: X };
  const Icon = config.icon;

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
        <div className="flex items-center gap-2 truncate">
            <Icon className="h-4 w-4" />
            <span>{title}</span>
        </div>
        
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
            className="absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize z-10" 
            data-resize-handle="bottom-right"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Right Edge */}
          <div 
            className="absolute right-0 top-0 h-full w-1 cursor-ew-resize z-10" 
            data-resize-handle="right"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Bottom Edge */}
          <div 
            className="absolute bottom-0 left-0 w-full h-1 cursor-ns-resize z-10" 
            data-resize-handle="bottom"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          
          {/* Top Left Corner */}
          <div 
            className="absolute top-0 left-0 w-3 h-3 cursor-nwse-resize z-10" 
            data-resize-handle="top-left"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Top Right Corner */}
          <div 
            className="absolute top-0 right-0 w-3 h-3 cursor-nesw-resize z-10" 
            data-resize-handle="top-right"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Bottom Left Corner */}
          <div 
            className="absolute bottom-0 left-0 w-3 h-3 cursor-nesw-resize z-10" 
            data-resize-handle="bottom-left"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Top Edge */}
          <div 
            className="absolute top-0 left-0 w-full h-1 cursor-ns-resize z-10" 
            data-resize-handle="top"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
          {/* Left Edge */}
          <div 
            className="absolute left-0 top-0 h-full w-1 cursor-ew-resize z-10" 
            data-resize-handle="left"
            onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(e as unknown as React.MouseEvent); }}
          />
        </>
      )}
    </div>
  );
};