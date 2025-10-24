import React from 'react';
import { WindowId, WindowState } from './useWindowManager';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Portfolio from '@/pages/Portfolio';
import Passions from '@/pages/Passions';
import { ProjectWindow } from './ProjectWindow';
import { SocialLinkWindow } from './SocialLinkWindow';

interface WindowContentRendererProps {
  windowState: WindowState;
}

// Mapping des IDs de fenêtre aux composants de page
const PageComponents: Record<string, React.ElementType> = {
  index: Index,
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  passions: Passions,
};

export const WindowContentRenderer = ({ windowState }: WindowContentRendererProps) => {
  if (windowState.type === 'dynamic-project' && windowState.data) {
    return <ProjectWindow project={windowState.data as any} />;
  }
  
  if (windowState.type === 'social-link' && windowState.data) {
    const socialData = windowState.data as { url: string, label: string };
    return <SocialLinkWindow windowId={windowState.id} url={socialData.url} label={socialData.label} />;
  }
  
  const Component = PageComponents[windowState.id];
  
  if (!Component) return <div>Contenu non trouvé pour {windowState.id}</div>;

  return <Component />;
};