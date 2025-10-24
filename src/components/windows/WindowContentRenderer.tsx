import React from 'react';
import { WindowId, WindowState } from './useWindowManager';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Portfolio from '@/pages/Portfolio';
import Passions from '@/pages/Passions';
import { ProjectWindow } from './ProjectWindow';

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
    return <ProjectWindow project={windowState.data} />;
  }
  
  const Component = PageComponents[windowState.id];
  
  if (!Component) return <div>Contenu non trouvé pour {windowState.id}</div>;

  return <Component />;
};