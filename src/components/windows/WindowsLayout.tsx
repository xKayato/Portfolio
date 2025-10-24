import React, { ReactNode } from 'react';
import { useDisplayMode } from '@/context/DisplayModeContext';
import { Button } from '../ui/button';
import { MonitorOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WindowId, WINDOW_CONFIGS, useWindowManager } from './useWindowManager';
import { DesktopIcon } from './DesktopIcon';
import { Window } from './Window';
import { WindowContentRenderer } from './WindowContentRenderer';
import { useLocation, useNavigate } from 'react-router-dom';
import { DeveloperSignature } from './DeveloperSignature';

interface WindowsLayoutProps {
  children: ReactNode;
}

// Définition des icônes de bureau (statiques + sociales)
const staticDesktopIcons: WindowId[] = ['index', 'about', 'skills', 'portfolio', 'passions', 'github', 'linkedin', 'email'];

export const WindowsLayout = ({ children }: WindowsLayoutProps) => {
  const { setMode } = useDisplayMode();
  const { windows, openWindow, minimizeWindow } = useWindowManager();
  const navigate = useNavigate();
  const location = useLocation();

  // Gérer la navigation initiale: si l'utilisateur arrive sur /about en mode windows, ouvrir la fenêtre 'about'.
  React.useEffect(() => {
    const pathMap: Record<string, WindowId> = {
      '/about': 'about',
      '/skills': 'skills',
      '/portfolio': 'portfolio',
      '/passions': 'passions',
      '/': 'index',
    };
    
    const currentId = pathMap[location.pathname];
    if (currentId) {
        openWindow(currentId);
        // Rediriger vers la racine pour que le bureau soit propre, 
        // mais garder la fenêtre ouverte.
        if (location.pathname !== '/') {
            navigate('/', { replace: true });
        }
    }
  }, [location.pathname, openWindow, navigate]);


  // Le fond d'écran (Desktop)
  const desktopClasses = cn(
    "h-screen w-screen overflow-hidden",
    "bg-blue-500 dark:bg-gray-900", // Changement ici: bg-blue-500 pour le mode clair
    "relative font-sans" // Assurer que la police est standard
  );

  // La barre des tâches (Taskbar)
  const taskbarClasses = cn(
    "fixed bottom-0 left-0 right-0 h-10 z-[1001]", // Z-index élevé pour être au-dessus des fenêtres
    "bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700",
    "flex items-center px-2 shadow-lg"
  );

  // Les fenêtres ouvertes (pour la barre des tâches, l'ordre est l'ordre du tableau 'windows')
  const openWindows = windows.filter(w => w.isOpen);
  
  // Les fenêtres à rendre, triées par zIndexOrder pour la superposition
  const windowsToRender = [...openWindows].sort((a, b) => a.zIndexOrder - b.zIndexOrder);

  // Ajout d'un effet pour désactiver le défilement du body/html
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  return (
    <div className={desktopClasses}>
      {/* Rendu des icônes de bureau (Gauche) */}
      <div className="absolute top-4 left-4 flex flex-col items-start">
        {staticDesktopIcons.map(id => (
          <DesktopIcon key={id} windowId={id} />
        ))}
      </div>
      
      {/* Signature du développeur (Centre) */}
      <DeveloperSignature />

      {/* Rendu des fenêtres ouvertes (triées par zIndexOrder) */}
      {windowsToRender.map(w => (
        <React.Fragment key={w.id}>
          {!w.isMinimized && (
            <Window
              id={w.id}
              title={w.title}
              isFocused={w.isFocused}
              initialX={w.initialX}
              initialY={w.initialY}
              initialWidth={w.initialWidth}
              initialHeight={w.initialHeight}
              scrollPosition={w.scrollPosition} // Passage de la position de défilement
            >
              <WindowContentRenderer windowState={w} />
            </Window>
          )}
        </React.Fragment>
      ))}

      {/* Barre des tâches */}
      <div className={taskbarClasses}>
        {/* Bouton Démarrer / Quitter */}
        <Button 
          variant="default" 
          size="sm" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold flex items-center gap-1 h-8"
          onClick={() => setMode('classic')}
        >
          <MonitorOff className="h-4 w-4" />
          Quitter le mode Windows
        </Button>

        {/* Zone des applications ouvertes (utilise l'ordre du tableau 'windows' non trié) */}
        <div className="flex-grow mx-4 flex gap-2 overflow-x-auto">
          {openWindows.map(w => {
            const Icon = w.icon;
            return (
              <Button
                key={w.id}
                variant={w.isFocused && !w.isMinimized ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "h-8 px-3 flex items-center gap-2 text-sm",
                  w.isMinimized ? "opacity-70" : "",
                  w.isFocused && !w.isMinimized ? "bg-secondary dark:bg-gray-700" : "hover:bg-gray-300 dark:hover:bg-gray-700"
                )}
                onClick={() => {
                  if (w.isFocused && !w.isMinimized) {
                    minimizeWindow(w.id);
                  } else {
                    // Si minimisé ou non focus, ouvrir/focus
                    openWindow(w.id, w.type === 'dynamic-project' ? w.data as any : undefined); 
                  }
                }}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{w.title}</span>
              </Button>
            );
          })}
        </div>

        {/* Horloge / Notifications */}
        <div className="text-sm text-foreground/80 bg-gray-300 dark:bg-gray-700 p-1 rounded h-8 flex items-center">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {/* Children (Routes) are rendered but hidden, they are only used by WindowContentRenderer */}
      <div className="hidden">{children}</div>
    </div>
  );
};