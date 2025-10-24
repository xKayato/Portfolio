import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

const NUM_STARS = 15; // Nombre d'étoiles filantes

const ShootingStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: NUM_STARS }, (_, i) => {
      const size = Math.random() * 1.5 + 0.5; // Taille entre 0.5px et 2px
      const opacity = Math.random() * 0.5 + 0.5; // Opacité entre 50% et 100%
      const x = Math.random() * 100; // Position X de départ
      const y = Math.random() * 100; // Position Y de départ
      const duration = Math.random() * 1 + 0.5; // Durée de l'animation entre 0.5s et 1.5s (très rapide)
      const delay = Math.random() * 10; // Délai de l'animation pour un effet asynchrone

      return {
        key: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          top: `${y}%`,
          left: `${x}%`,
          opacity: opacity,
          '--star-duration': `${duration}s`,
          '--star-delay': `${delay}s`,
        } as React.CSSProperties,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.key}
          className={cn(
            "absolute bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)]", // Point lumineux
            "animate-shooting-star" 
          )}
          style={{
            ...star.style,
            animationDuration: star.style['--star-duration'],
            animationDelay: star.style['--star-delay'],
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;