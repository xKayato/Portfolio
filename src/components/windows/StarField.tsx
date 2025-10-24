import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

const NUM_DRIFTERS = 200; // Nombre d'étoiles de fond

const StarField = () => {
  const stars = useMemo(() => {
    const drifters = Array.from({ length: NUM_DRIFTERS }, (_, i) => {
      const size = Math.random() * 1.5 + 0.5; // Taille entre 0.5px et 2px
      const opacity = Math.random() * 0.8 + 0.2; // Opacité entre 20% et 100%
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 10 + 10; // Durée de l'animation entre 10s et 20s (lent)
      const delay = Math.random() * 5; // Délai de l'animation

      return {
        key: `drift-${i}`,
        type: 'drifter',
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${y}%`,
          left: `${x}%`,
          // L'opacité est gérée par la variable CSS pour le clignotement
          '--initial-opacity': opacity, 
          '--animation-duration': `${duration}s`,
          '--animation-delay': `${delay}s`,
        } as React.CSSProperties,
      };
    });

    return drifters;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => {
        // Puisqu'il n'y a plus que des drifters, on peut simplifier le rendu
        return (
          <div
            key={star.key}
            className={cn(
              "absolute bg-white rounded-full",
              "animate-[star-drift_var(--animation-duration)_ease-in-out_infinite_alternate]" 
            )}
            style={{
              ...star.style,
              animationDelay: star.style['--animation-delay'],
              // Appliquer l'opacité initiale directement pour le rendu initial
              opacity: star.style['--initial-opacity'] as number, 
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;