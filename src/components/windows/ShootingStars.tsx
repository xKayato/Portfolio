import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

const NUM_STARS = 15; // Réduction du nombre d'étoiles

const ShootingStars = () => {
  const stars = useMemo(() => {
    return Array.from({ length: NUM_STARS }, (_, i) => {
      const length = Math.random() * 100 + 150; // Longueur de la traînée entre 150px et 250px
      const thickness = Math.random() * 1 + 1; // Épaisseur entre 1px et 2px
      const opacity = Math.random() * 0.3 + 0.2; // Opacité entre 20% et 50% (moins clair)
      const x = Math.random() * 100; // Position X de départ
      const y = Math.random() * 100; // Position Y de départ
      const duration = Math.random() * 2 + 1; // Durée de l'animation entre 1s et 3s
      const delay = Math.random() * 10; // Délai de l'animation pour un effet asynchrone

      return {
        key: i,
        style: {
          width: `${length}px`,
          height: `${thickness}px`,
          top: `${y}%`,
          left: `${x}%`,
          opacity: opacity,
          // Utilisation d'un dégradé pour simuler la traînée (tête blanche, queue transparente)
          background: `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)`,
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
            "absolute origin-left", // L'animation se fait depuis la gauche de l'élément
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