// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre rola para o topo quando o pathname muda
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
