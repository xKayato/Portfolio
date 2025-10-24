import React from 'react';
import { WindowId } from './useWindowManager';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Portfolio from '@/pages/Portfolio';
import Passions from '@/pages/Passions';

interface WindowContentRendererProps {
  windowId: WindowId;
}

// Mapping des IDs de fenêtre aux composants de page
const PageComponents: Record<WindowId, React.ElementType> = {
  index: Index,
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  passions: Passions,
};

export const WindowContentRenderer = ({ windowId }: WindowContentRendererProps) => {
  const Component = PageComponents[windowId];
  
  return <Component />;
};