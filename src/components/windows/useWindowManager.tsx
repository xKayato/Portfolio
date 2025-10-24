import React, { useState, useCallback, useMemo, useContext } from 'react';
import { Home, User, Code, Briefcase, Heart } from 'lucide-react';

export type WindowId = 'index' | 'about' | 'skills' | 'portfolio' | 'passions';

export interface WindowState {
  id: WindowId;
  title: string;
  icon: React.ElementType;
  isMinimized: boolean;
  isFocused: boolean;
  isOpen: boolean;
  initialX: number;
  initialY: number;
  initialWidth: number;
  initialHeight: number;
}

export const WINDOW_CONFIGS: Record<WindowId, Omit<WindowState, 'isMinimized' | 'isFocused' | 'isOpen' | 'initialX' | 'initialY' | 'initialWidth' | 'initialHeight'>> = {
  index: { id: 'index', title: 'Bienvenue', icon: Home },
  about: { id: 'about', title: 'À Propos de moi', icon: User },
  skills: { id: 'skills', title: 'Mes Compétences', icon: Code },
  portfolio: { id: 'portfolio', title: 'Mon Portfolio', icon: Briefcase },
  passions: { id: 'passions', title: 'Mes Passions', icon: Heart },
};

interface WindowManagerContextType {
  windows: WindowState[];
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  updateWindowPosition: (id: WindowId, x: number, y: number) => void;
  updateWindowSize: (id: WindowId, width: number, height: number) => void;
}

const WindowManagerContext = React.createContext<WindowManagerContextType | undefined>(undefined);

const initialWindowStates: WindowState[] = Object.values(WINDOW_CONFIGS).map(config => ({
  ...config,
  isMinimized: false,
  isFocused: false,
  isOpen: false,
  initialX: 50 + Math.random() * 100, // Random initial position
  initialY: 50 + Math.random() * 100,
  initialWidth: 800,
  initialHeight: 600,
}));

export const WindowManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<WindowState[]>(initialWindowStates);
  const [lastZIndex, setLastZIndex] = useState(100);

  const focusWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => {
      const newWindows = prevWindows.map(w => ({
        ...w,
        isFocused: w.id === id,
      }));
      setLastZIndex(prev => prev + 1);
      return newWindows;
    });
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => {
      const existingWindow = prevWindows.find(w => w.id === id);
      if (existingWindow && existingWindow.isOpen) {
        // If already open, just focus it and unminimize if necessary
        if (existingWindow.isMinimized) {
          return prevWindows.map(w => ({
            ...w,
            isFocused: w.id === id,
            isMinimized: w.id === id ? false : w.isMinimized,
          }));
        }
        focusWindow(id);
        return prevWindows;
      }

      // Open and focus the new window
      const newWindows = prevWindows.map(w => ({
        ...w,
        isFocused: w.id === id,
        isOpen: w.id === id ? true : w.isOpen,
        isMinimized: false,
      }));
      focusWindow(id); // Ensure focus logic runs to update Z-index
      return newWindows;
    });
  }, [focusWindow]);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => prevWindows.map(w => 
      w.id === id ? { ...w, isOpen: false, isMinimized: false, isFocused: false } : w
    ));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => prevWindows.map(w => 
      w.id === id ? { ...w, isMinimized: true, isFocused: false } : w
    ));
  }, []);

  const updateWindowPosition = useCallback((id: WindowId, x: number, y: number) => {
    setWindows(prevWindows => prevWindows.map(w => 
      w.id === id ? { ...w, initialX: x, initialY: y } : w
    ));
  }, []);

  const updateWindowSize = useCallback((id: WindowId, width: number, height: number) => {
    setWindows(prevWindows => prevWindows.map(w => 
      w.id === id ? { ...w, initialWidth: width, initialHeight: height } : w
    ));
  }, []);

  const contextValue = useMemo(() => ({
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
  }), [windows, openWindow, closeWindow, minimizeWindow, focusWindow, updateWindowPosition, updateWindowSize]);

  return (
    <WindowManagerContext.Provider value={contextValue as WindowManagerContextType}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (context === undefined) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
};