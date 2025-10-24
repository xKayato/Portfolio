import React, { useState, useCallback, useMemo, useContext } from 'react';
import { Home, User, Code, Briefcase, Heart, FileText } from 'lucide-react';

export type WindowId = 'index' | 'about' | 'skills' | 'portfolio' | 'passions' | string; // Ajout de string pour les IDs dynamiques

export interface ProjectData {
  title: string;
  detailedDescription: string;
  images: string[];
  link?: string;
  tags: {
    categories: string[];
    notions: string[];
    logiciels: string[];
  };
  deliverables?: {
    label: string;
    url: string;
  };
}

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
  // Propriétés spécifiques aux fenêtres dynamiques
  type: 'static' | 'dynamic-project';
  data?: ProjectData;
}

export const WINDOW_CONFIGS: Record<string, Omit<WindowState, 'isMinimized' | 'isFocused' | 'isOpen' | 'initialX' | 'initialY' | 'initialWidth' | 'initialHeight' | 'data'>> = {
  index: { id: 'index', title: 'Bienvenue', icon: Home, type: 'static' },
  about: { id: 'about', title: 'À Propos de moi', icon: User, type: 'static' },
  skills: { id: 'skills', title: 'Mes Compétences', icon: Code, type: 'static' },
  portfolio: { id: 'portfolio', title: 'Mon Portfolio', icon: Briefcase, type: 'static' },
  passions: { id: 'passions', title: 'Mes Passions', icon: Heart, type: 'static' },
};

interface WindowManagerContextType {
  windows: WindowState[];
  openWindow: (id: WindowId, data?: ProjectData) => void; // Mise à jour de la signature
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
  initialX: 50 + Math.random() * 100,
  initialY: 50 + Math.random() * 100,
  initialWidth: 800,
  initialHeight: 600,
  type: 'static',
}));

// Générateur d'ID unique pour les projets
let projectCount = 0;
const generateProjectId = (title: string) => {
    projectCount += 1;
    return `project-${projectCount}-${title.replace(/\s/g, '-')}`;
};

export const WindowManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const [windows, setWindows] = useState<WindowState[]>(initialWindowStates);

  const focusWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => {
      // Augmenter le z-index du focusé
      const focusedWindow = prevWindows.find(w => w.id === id);
      if (!focusedWindow) return prevWindows;

      const maxZIndex = prevWindows.reduce((max, w) => {
        // On suppose que les fenêtres ouvertes ont un z-index géré par leur ordre dans le tableau
        return max;
      }, 1000);

      // Déplacer la fenêtre en focus à la fin du tableau pour un z-index plus élevé
      const newWindows = prevWindows.filter(w => w.id !== id);
      newWindows.push({ ...focusedWindow, isFocused: true, isMinimized: false });

      return newWindows.map(w => ({
        ...w,
        isFocused: w.id === id,
      }));
    });
  }, []);

  const openWindow = useCallback((id: WindowId, data?: ProjectData) => {
    setWindows(prevWindows => {
      const existingWindow = prevWindows.find(w => w.id === id);
      
      if (existingWindow && existingWindow.isOpen) {
        // Si déjà ouvert, focus et déminimiser
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

      let newWindow: WindowState;

      if (data) {
        // C'est un nouveau projet dynamique
        newWindow = {
          id: generateProjectId(data.title), // Générer un ID unique
          title: data.title,
          icon: FileText,
          isMinimized: false,
          isFocused: true,
          isOpen: true,
          initialX: 150 + Math.random() * 50, // Position décalée pour les projets
          initialY: 150 + Math.random() * 50,
          initialWidth: 900,
          initialHeight: 700,
          type: 'dynamic-project',
          data: data,
        };
        
        // Fermer toutes les autres fenêtres et ajouter la nouvelle
        const updatedWindows = prevWindows.map(w => ({
            ...w,
            isFocused: false,
        })).filter(w => w.type === 'static'); // Garder les statiques pour l'état initial

        return [...updatedWindows, newWindow];

      } else {
        // Fenêtre statique (index, about, etc.)
        const config = WINDOW_CONFIGS[id];
        if (!config) return prevWindows;

        newWindow = {
            ...config,
            isMinimized: false,
            isFocused: true,
            isOpen: true,
            initialX: 50 + Math.random() * 100,
            initialY: 50 + Math.random() * 100,
            initialWidth: 800,
            initialHeight: 600,
            type: 'static',
        };
        
        // Mettre à jour l'état existant ou ajouter la nouvelle fenêtre
        const updatedWindows = prevWindows.map(w => ({
            ...w,
            isFocused: false,
            ...(w.id === id ? newWindow : {})
        })).filter(w => w.id !== id); // Retirer l'ancienne version si elle existe

        return [...updatedWindows, newWindow];
      }
    });
    focusWindow(id); // Assurer le focus après l'ajout/mise à jour
  }, [focusWindow]);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => {
      const windowToClose = prevWindows.find(w => w.id === id);
      if (!windowToClose) return prevWindows;

      if (windowToClose.type === 'dynamic-project') {
        // Supprimer complètement la fenêtre dynamique
        const newWindows = prevWindows.filter(w => w.id !== id);
        
        // Tenter de mettre le focus sur la dernière fenêtre ouverte
        if (newWindows.length > 0) {
            focusWindow(newWindows[newWindows.length - 1].id);
        }
        return newWindows;
      } else {
        // Fenêtre statique: marquer comme fermée
        const newWindows = prevWindows.map(w => 
          w.id === id ? { ...w, isOpen: false, isMinimized: false, isFocused: false } : w
        );
        
        // Tenter de mettre le focus sur la dernière fenêtre ouverte
        const openStaticWindows = newWindows.filter(w => w.isOpen && w.type === 'static');
        if (openStaticWindows.length > 0) {
            focusWindow(openStaticWindows[openStaticWindows.length - 1].id);
        }
        return newWindows;
      }
    });
  }, [focusWindow]);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => {
        const newWindows = prevWindows.map(w => 
            w.id === id ? { ...w, isMinimized: true, isFocused: false } : w
        );
        
        // Trouver la prochaine fenêtre à mettre en focus
        const nextFocusedWindow = newWindows.filter(w => w.isOpen && w.id !== id).pop();
        if (nextFocusedWindow) {
            return newWindows.map(w => ({
                ...w,
                isFocused: w.id === nextFocusedWindow.id ? true : w.isFocused,
            }));
        }
        return newWindows;
    });
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