import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant qui fait défiler la fenêtre au sommet à chaque changement de route.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Utilisation de window.scrollTo pour s'assurer que le défilement est appliqué à la fenêtre principale
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;