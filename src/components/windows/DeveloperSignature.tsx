import React from 'react';
import { personalInfo } from '@/data/content';
import { cn } from '@/lib/utils';
import { TypingEffect } from '../TypingEffect';

export const DeveloperSignature = () => {
  const fullName = personalInfo.name;

  return (
    <div 
      className={cn(
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", // Centrage
        "text-4xl md:text-6xl font-bold tracking-tight",
        "text-white/70 dark:text-white/70", // Couleur claire pour le fond sombre du bureau
        "pointer-events-none select-none z-0" // Assurer qu'il est derrière les icônes
      )}
    >
      <TypingEffect 
        text={fullName} 
        speed={150} 
        className="font-8bit text-shadow-lg" // Utilisation de la police 8bit si elle est définie, sinon une police stylisée
      />
    </div>
  );
};