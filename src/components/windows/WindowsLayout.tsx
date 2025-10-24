import React, { ReactNode } from 'react';
import { useDisplayMode } from '@/context/DisplayModeContext';
import { Button } from '../ui/button';
import { Power, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WindowsLayoutProps {
  children: ReactNode;
}

export const WindowsLayout = ({ children }: WindowsLayoutProps) => {
  const { setMode } = useDisplayMode();

  // Le fond d'écran (Desktop)
  const desktopClasses = cn(
    "h-screen w-screen overflow-hidden",
    "bg-blue-700 dark:bg-gray-900", // Couleur de fond simple pour le bureau
    "relative"
  );

  // La barre des tâches (Taskbar)
  const taskbarClasses = cn(
    "fixed bottom-0 left-0 right-0 h-10 z-50",
    "bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700",
    "flex items-center px-2 shadow-lg"
  );

  return (
    <div className={desktopClasses}>
      {/* Ici, nous allons afficher les pages (Index, About, etc.) */}
      {/* Pour l'instant, nous affichons juste les enfants (Routes) */}
      <div className="p-4 h-[calc(100vh-40px)] overflow-auto">
        {children}
      </div>

      {/* Barre des tâches */}
      <div className={taskbarClasses}>
        {/* Bouton Démarrer / Home */}
        <Button 
          variant="default" 
          size="sm" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold flex items-center gap-1"
          onClick={() => setMode('classic')}
        >
          <Power className="h-4 w-4" />
          Quitter
        </Button>

        {/* Zone des applications ouvertes (vide pour l'instant) */}
        <div className="flex-grow mx-4">
          {/* Placeholder pour les fenêtres ouvertes */}
        </div>

        {/* Horloge / Notifications (simple placeholder) */}
        <div className="text-sm text-foreground/80">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};