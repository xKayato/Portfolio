import React, { useState, useEffect } from 'react';
import { personalInfo } from '@/data/content';
import { cn } from '@/lib/utils';
import { TypingEffect } from '../TypingEffect';

export const DeveloperSignature = () => {
  const [stage, setStage] = useState<'name' | 'title'>('name');
  const fullName = personalInfo.name;
  const titleText = personalInfo.title;

  // Déclencher la deuxième étape après la fin de la première
  const handleNameFinish = () => {
    // Délai avant de commencer la deuxième ligne
    setTimeout(() => {
      setStage('title');
    }, 500); 
  };

  return (
    <div 
      className={cn(
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", // Centrage
        "text-center",
        "text-white/70 dark:text-white/70", 
        "pointer-events-none select-none z-0"
      )}
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
        <TypingEffect 
          text={fullName} 
          speed={150} 
          className="text-shadow-lg"
          onFinish={handleNameFinish} // Nouveau prop pour gérer la fin de la frappe
        />
      </h1>
      
      {stage === 'title' && (
        <h2 className="mt-3 text-xl font-medium text-primary sm:text-2xl">
          <TypingEffect 
            text={titleText} 
            speed={100} 
            className="text-shadow-lg"
          />
        </h2>
      )}
    </div>
  );
};