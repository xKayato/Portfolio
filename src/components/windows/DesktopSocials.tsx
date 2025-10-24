import React from 'react';
import { personalInfo } from '@/data/content';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export const DesktopSocials = () => {
  // Filtrer les liens sociaux pour n'afficher que ceux avec une icône définie
  const socials = personalInfo.socials.filter(s => s.icon);

  return (
    <div 
      className={cn(
        "absolute top-4 right-4 flex flex-col items-end space-y-2",
        "pointer-events-auto z-10" // Assurer qu'ils sont cliquables
      )}
    >
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white drop-shadow-md"
              >
                <Icon className="h-5 w-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};