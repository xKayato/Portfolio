import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type DisplayMode = 'classic' | 'windows';

interface DisplayModeContextType {
  mode: DisplayMode;
  setMode: (mode: DisplayMode) => void;
}

const DisplayModeContext = createContext<DisplayModeContextType | undefined>(undefined);

export const DisplayModeProvider = ({ children }: { children: ReactNode }) => {
  // Initialisation à 'windows' par défaut, mais sera ajusté côté client
  const [mode, setMode] = useState<DisplayMode>('windows');
  const isMobile = useIsMobile();

  // Définir le mode initial après que isMobile soit résolu (côté client)
  useEffect(() => {
    if (isMobile) {
      setMode('classic');
    } else {
      // Si ce n'est pas mobile, on s'assure que le mode windows est bien le mode par défaut
      setMode('windows');
    }
  }, [isMobile]);


  return (
    <DisplayModeContext.Provider value={{ mode, setMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
};

export const useDisplayMode = () => {
  const context = useContext(DisplayModeContext);
  if (context === undefined) {
    throw new Error('useDisplayMode must be used within a DisplayModeProvider');
  }
  return context;
};