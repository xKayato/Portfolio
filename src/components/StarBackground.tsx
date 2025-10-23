import React from 'react';
import { cn } from '@/lib/utils';

const NUM_STARS = 100;

const StarBackground = () => {
  const stars = React.useMemo(() => {
    return Array.from({ length: NUM_STARS }, (_, i) => {
      const size = Math.random() * 1.5 + 0.5; // Taille entre 0.5px et 2px
      const opacity = Math.random() * 0.8 + 0.2; // Opacité entre 20% et 100%
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 10 + 10; // Durée de l'animation entre 10s et 20s
      const delay = Math.random() * 5; // Délai de l'animation

      return {
        key: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${y}%`,
          left: `${x}%`,
          opacity: opacity,
          // Utilisation de variables CSS pour l'animation
          '--animation-duration': `${duration}s`,
          '--animation-delay': `${delay}s`,
        } as React.CSSProperties, // Cast pour inclure les variables CSS
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.key}
          className={cn(
            "absolute bg-white rounded-full",
            // Application de l'animation définie dans tailwind.config.ts
            "animate-[star-drift_var(--animation-duration)_ease-in-out_infinite_alternate]" 
          )}
          style={{
            ...star.style,
            animationDelay: star.style['--animation-delay'],
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;