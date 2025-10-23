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

  const isDark = resolvedTheme === 'dark';
  
  if (!isDark) {
    return null;
  }

  // Style pour positionner le cercle au centre du curseur et ajouter une transition plus douce
  const style = {
    transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
    transition: 'transform 0.2s ease-out', // Légèrement plus lent pour plus de glissement
  };

  return (
    <div 
      className={cn(
        "fixed top-0 left-0 w-[30rem] h-[30rem] rounded-full pointer-events-none z-[9999]", // Très large (480px)
        "bg-primary/15 blur-[100px] opacity-20" // Moins opaque et flou très intense (blur-[100px] est une valeur custom si 3xl n'est pas assez)
      )}
      style={style}
    />
  );
};