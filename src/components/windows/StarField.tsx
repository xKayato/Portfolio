import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';

const NUM_DRIFTERS = 200; // Nombre d'étoiles de fond (déjà défini dans StarBackground)
const NUM_SHOOTERS = 10; // Nombre d'étoiles filantes rapides

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
          opacity: opacity,
          '--animation-duration': `${duration}s`,
          '--animation-delay': `${delay}s`,
        } as React.CSSProperties,
      };
    });

    const shooters = Array.from({ length: NUM_SHOOTERS }, (_, i) => {
      const length = Math.random() * 100 + 150; // Longueur de la traînée entre 150px et 250px
      const thickness = Math.random() * 1 + 1; // Épaisseur entre 1px et 2px
      const opacity = Math.random() * 0.3 + 0.2; // Opacité entre 20% et 50% (moins clair)
      const x = Math.random() * 100; // Position X de départ
      const y = Math.random() * 100; // Position Y de départ
      const duration = Math.random() * 1 + 0.5; // Durée de l'animation entre 0.5s et 1.5s (très rapide)
      const delay = Math.random() * 15; // Délai de l'animation pour un effet asynchrone (moins fréquent)

      return {
        key: `shoot-${i}`,
        type: 'shooter',
        style: {
          width: `${length}px`,
          height: `${thickness}px`,
          top: `${y}%`,
          left: `${x}%`,
          opacity: opacity,
          background: `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)`,
          '--star-duration': `${duration}s`,
          '--star-delay': `${delay}s`,
        } as React.CSSProperties,
      };
    });

    return [...drifters, ...shooters];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => {
        if (star.type === 'drifter') {
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
              }}
            />
          );
        }
        
        // Shooter (Étoile filante)
        return (
          <div
            key={star.key}
            className={cn(
              "absolute origin-left",
              "animate-shooting-star" 
            )}
            style={{
              ...star.style,
              animationDuration: star.style['--star-duration'],
              animationDelay: star.style['--star-delay'],
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;