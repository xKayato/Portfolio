import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Composant qui fait défiler la fenêtre au sommet à chaque changement de route.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;