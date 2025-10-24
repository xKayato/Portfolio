import React from 'react';
import { personalInfo } from '@/data/content';
import { cn } from '@/lib/utils';

export const DeveloperSignature = () => {
  const [firstName, lastName] = personalInfo.name.split(' ');

  return (
    <div 
      className={cn(
        "absolute bottom-12 right-4 p-2", // Au-dessus de la barre des tâches
        "text-xs font-mono text-white/50 dark:text-white/30",
        "pointer-events-none select-none"
      )}
    >
      <p className="text-right">
        {firstName} {lastName}
      </p>
      <p className="text-right">
        Developer Mode
      </p>
    </div>
  );
};