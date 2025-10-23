"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface MousePosition {
  x: number;
  y: number;
}

export const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: -100, y: -100 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Détermine la couleur du cercle en fonction du thème
  // En mode sombre, nous utilisons une couleur vive (primary)
  // En mode clair, nous le désactivons ou utilisons une couleur très subtile pour ne pas gêner
  const isDark = resolvedTheme === 'dark';
  
  if (!isDark) {
    // Désactiver l'effet en mode clair pour ne pas perturber le design
    return null;
  }

  // Style pour positionner le cercle au centre du curseur
  const style = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
  };

  return (
    <div 
      className={cn(
        "fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none transition-transform duration-100 ease-out z-[9999]",
        "bg-primary/30 blur-3xl opacity-50" // Couleur primaire avec flou intense et faible opacité
      )}
      style={style}
    />
  );
};