import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';

interface LoadingScreenProps {
  onLoaded: () => void;
  delay?: number; // Délai en ms
}

export const LoadingScreen = ({ onLoaded, delay = 3000 }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, Math.floor((elapsed / delay) * 100));
      setProgress(newProgress);

      if (elapsed >= delay) {
        clearInterval(interval);
        onLoaded();
      }
    }, 50); // Mise à jour toutes les 50ms

    return () => clearInterval(interval);
  }, [delay, onLoaded]);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[2000] transition-opacity duration-500">
      <div className="flex flex-col items-center">
        <Logo className="h-16 w-auto mb-6 animate-pulse" />
        <h1 className="text-2xl font-bold mb-8 text-foreground">
          Chargement du Portfolio...
        </h1>
        
        {/* Barre de progression simple */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{progress}%</p>
      </div>
    </div>
  );
};