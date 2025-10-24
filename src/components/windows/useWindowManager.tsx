import React, { useState, useCallback, useMemo, useContext } from 'react';
import { Home, User, Code, Briefcase, Heart, FileText, Github, Linkedin, Mail } from 'lucide-react';

export type WindowId = 'index' | 'about' | 'skills' | 'portfolio' | 'passions' | 'github' | 'linkedin' | 'email' | string; // Ajout des IDs sociaux

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
  type: 'static' | 'dynamic-project' | 'social-link'; // Ajout du type 'social-link'
  data?: ProjectData | { url: string, label: string }; // Mise à jour du type de données
  // Nouveau champ pour gérer l'ordre de superposition (z-index)
  zIndexOrder: number; 
  // Nouveau champ pour stocker la position de défilement
  scrollPosition: number;
}

export const WINDOW_CONFIGS: Record<string, Omit<WindowState, 'isMinimized' | 'isFocused' | 'isOpen' | 'initialX' | 'initialY' | 'initialWidth' | 'initialHeight' | 'data' | 'zIndexOrder' | 'scrollPosition'>> = {
  index: { id: 'index', title: 'Bienvenue', icon: Home, type: 'static' },
  about: { id: 'about', title: 'À Propos de moi', icon: User, type: 'static' },
  skills: { id: 'skills', title: 'Mes Compétences', icon: Code, type: 'static' },
  portfolio: { id: 'portfolio', title: 'Mon Portfolio', icon: Briefcase, type: 'static' },
  passions: { id: 'passions', title: 'Mes Passions', icon: Heart, type: 'static' },
  // Nouvelles configurations sociales
  github: { id: 'github', title: 'GitHub', icon: Github, type: 'social-link' },
  linkedin: { id: 'linkedin', title: 'LinkedIn', icon: Linkedin, type: 'social-link' },
  email: { id: 'email', title: 'Contact Email', icon: Mail, type: 'social-link' },
};

interface WindowManagerContextType {
  windows: WindowState[];
  openWindow: (id: WindowId, data?: ProjectData) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  updateWindowPosition: (id: WindowId, x: number, y: number) => void;
  updateWindowSize: (id: WindowId, width: number, height: number) => void;
  updateWindowScroll: (id: WindowId, scrollPosition: number) => void;
  resetWindowPosition: (id: WindowId) => void; // Nouvelle fonction
}

const WindowManagerContext = React.createContext<WindowManagerContextType | undefined>(undefined);

// Compteur global pour le z-index
let globalZIndexCounter = 100;

// Décalages pour les fenêtres statiques
const STATIC_WINDOW_OFFSETS = {
    index: { x: 100, y: 50, w: 800, h: 600 },
    about: { x: 150, y: 100, w: 800, h: 600 },
    skills: { x: 200, y: 150, w: 900, h: 700 },
    portfolio: { x: 250, y: 200, w: 900, h: 700 },
    passions: { x: 300, y: 250, w: 800, h: 600 },
    // Décalages pour les applications sociales
    github: { x: 50, y: 50, w: 400, h: 300 },
    linkedin: { x: 100, y: 100, w: 400, h: 300 },
    email: { x: 150, y: 150, w: 400, h: 300 },
};

const initialWindowStates: WindowState[] = Object.values(WINDOW_CONFIGS).map(config => {
    const offset = STATIC_WINDOW_OFFSETS[config.id as keyof typeof STATIC_WINDOW_OFFSETS] || { x: 50, y: 50, w: 800, h: 600 };
    
    // Définir les données pour les liens sociaux statiques
    let data: WindowState['data'] = undefined;
    if (config.id === 'github') {
        data = { url: 'https://github.com/xKayato/', label: 'Ouvrir GitHub' };
    } else if (config.id === 'linkedin') {
        data = { url: 'https://www.linkedin.com/in/thomasdeloup/', label: 'Ouvrir LinkedIn' };
    } else if (config.id === 'email') {
        data = { url: 'mailto:thomas.deloup@etu.univ-cotedazur.fr', label: 'Envoyer un Email' };
    }

    return {
        ...config,
        isMinimized: false,
        isFocused: false,
        isOpen: false,
        initialX: offset.x,
        initialY: offset.y,
        initialWidth: offset.w,
        initialHeight: offset.h,
        type: config.type as WindowState['type'], // Assurer le bon type
        data: data,
        zIndexOrder: globalZIndexCounter++,
        scrollPosition: 0, // Initialisation à 0
    };
});

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
      // Incrémenter le compteur global pour garantir que la fenêtre en focus a le zIndexOrder le plus élevé
      globalZIndexCounter++; 
      
      return prevWindows.map(w => {
        if (w.id === id) {
          return { 
            ...w, 
            isFocused: true, 
            isMinimized: false,
            zIndexOrder: globalZIndexCounter, // Mettre à jour l'ordre de superposition
          };
        }
        return {
          ...w,
          isFocused: false,
        };
      });
    });
  }, []);

  const openWindow = useCallback((id: WindowId, data?: ProjectData) => {
    let targetId = id;

    setWindows(prevWindows => {
      let existingWindow = prevWindows.find(w => w.id === id);
      
      if (data) {
        // Si c'est un projet dynamique, nous devons générer un nouvel ID
        targetId = generateProjectId(data.title);
        existingWindow = undefined; // Forcer l'ouverture d'une nouvelle fenêtre pour les projets
      }

      if (existingWindow && existingWindow.isOpen) {
        // Si déjà ouvert, focus et déminimiser
        if (existingWindow.isMinimized) {
          // On va juste focus la fenêtre existante via l'appel focusWindow ci-dessous
          return prevWindows;
        }
        // Si déjà ouvert et non minimisé, on le focus via l'appel focusWindow ci-dessous
        return prevWindows;
      }

      let newWindow: WindowState;
      globalZIndexCounter++;

      if (data) {
        // C'est un nouveau projet dynamique
        newWindow = {
          id: targetId, // Utiliser l'ID généré
          title: data.title,
          icon: FileText,
          isMinimized: false,
          isFocused: true,
          isOpen: true,
          initialX: 150 + Math.random() * 50, 
          initialY: 150 + Math.random() * 50,
          initialWidth: 900,
          initialHeight: 700,
          type: 'dynamic-project',
          data: data,
          zIndexOrder: globalZIndexCounter,
          scrollPosition: 0, // Initialisation du scroll
        };
        
        // Mettre toutes les autres fenêtres en non focus
        const updatedWindows = prevWindows.map(w => ({
            ...w,
            isFocused: false,
        }));

        return [...updatedWindows, newWindow];

      } else {
        // Fenêtre statique (index, about, skills, socials, etc.)
        const config = WINDOW_CONFIGS[id];
        if (!config) return prevWindows;

        // Mettre à jour l'état existant (si statique)
        const updatedWindows = prevWindows.map(w => {
            if (w.id === id) {
                return {
                    ...w,
                    isMinimized: false,
                    isFocused: true,
                    isOpen: true,
                    zIndexOrder: globalZIndexCounter,
                };
            }
            return {
                ...w,
                isFocused: false,
            };
        });
        
        return updatedWindows;
      }
    });
    
    // Assurer le focus après l'ajout/mise à jour. 
    focusWindow(targetId); 
  }, [focusWindow]);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => {
      const windowToClose = prevWindows.find(w => w.id === id);
      if (!windowToClose) return prevWindows;

      let newWindows: WindowState[];
      const defaultOffset = STATIC_WINDOW_OFFSETS[id as keyof typeof STATIC_WINDOW_OFFSETS];

      if (windowToClose.type === 'dynamic-project') {
        // Supprimer complètement la fenêtre dynamique
        newWindows = prevWindows.filter(w => w.id !== id);
      } else {
        // Fenêtre statique: marquer comme fermée, réinitialiser le scroll ET la position
        newWindows = prevWindows.map(w => 
          w.id === id ? { 
            ...w, 
            isOpen: false, 
            isMinimized: false, 
            isFocused: false, 
            scrollPosition: 0,
            // Réinitialiser la position à la position par défaut
            initialX: defaultOffset?.x ?? w.initialX,
            initialY: defaultOffset?.y ?? w.initialY,
          } : w
        );
      }
      
      // Tenter de mettre le focus sur la fenêtre ouverte avec le zIndexOrder le plus élevé
      const openWindows = newWindows.filter(w => w.isOpen && !w.isMinimized);
      if (openWindows.length > 0) {
          // Trouver la fenêtre avec le zIndexOrder max
          const nextFocusedWindow = openWindows.reduce((prev, current) => 
            (prev.zIndexOrder > current.zIndexOrder) ? prev : current
          );
          focusWindow(nextFocusedWindow.id);
      }
      return newWindows;
    });
  }, [focusWindow]);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows(prevWindows => {
        const newWindows = prevWindows.map(w => 
            w.id === id ? { ...w, isMinimized: true, isFocused: false } : w
        );
        
        // Trouver la prochaine fenêtre à mettre en focus (celle avec le zIndexOrder max)
        const openWindows = newWindows.filter(w => w.isOpen && !w.isMinimized && w.id !== id);
        if (openWindows.length > 0) {
            const nextFocusedWindow = openWindows.reduce((prev, current) => 
                (prev.zIndexOrder > current.zIndexOrder) ? prev : current
            );
            focusWindow(nextFocusedWindow.id);
        }
        return newWindows;
    });
  }, [focusWindow]);

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
  
  const updateWindowScroll = useCallback((id: WindowId, scrollPosition: number) => {
    setWindows(prevWindows => prevWindows.map(w => 
      w.id === id ? { ...w, scrollPosition } : w
    ));
  }, []);
  
  const resetWindowPosition = useCallback((id: WindowId) => {
    const defaultOffset = STATIC_WINDOW_OFFSETS[id as keyof typeof STATIC_WINDOW_OFFSETS];
    if (!defaultOffset) return;

    setWindows(prevWindows => prevWindows.map(w => 
      w.id === id ? { 
        ...w, 
        initialX: defaultOffset.x, 
        initialY: defaultOffset.y,
        scrollPosition: 0, // Réinitialiser le scroll aussi
      } : w
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
    updateWindowScroll,
    resetWindowPosition,
  }), [windows, openWindow, closeWindow, minimizeWindow, focusWindow, updateWindowPosition, updateWindowSize, updateWindowScroll, resetWindowPosition]);

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