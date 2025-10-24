import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { TechButton } from '../TechButton';
import { personalInfo } from '@/data/content';
import { WINDOW_CONFIGS, WindowId } from './useWindowManager';

interface SocialLinkWindowProps {
  windowId: WindowId;
  url: string;
  label: string;
}

export const SocialLinkWindow = ({ windowId, url, label }: SocialLinkWindowProps) => {
  const config = WINDOW_CONFIGS[windowId];
  const Icon = config.icon;
  
  const socialName = config.title;
  
  // Trouver la description ou l'information pertinente
  let description = `Cliquez sur le bouton ci-dessous pour ouvrir mon profil ${socialName} dans un nouvel onglet.`;
  
  if (windowId === 'email') {
      description = `Ceci est mon adresse email universitaire. Cliquez sur le bouton pour ouvrir votre client de messagerie et me contacter.`;
  }

  return (
    <div className="p-6 flex flex-col items-center justify-center h-full text-center">
      <Icon className="h-16 w-16 text-primary mb-4" />
      <h1 className="text-2xl font-bold mb-2 text-foreground">{socialName}</h1>
      
      <p className="text-muted-foreground mb-8 max-w-xs">
        {description}
      </p>
      
      <a href={url} target="_blank" rel="noreferrer">
        <TechButton>
          {label} <ExternalLink className="ml-2 h-4 w-4" />
        </TechButton>
      </a>
    </div>
  );
};