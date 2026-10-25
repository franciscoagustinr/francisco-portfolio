import { useEffect } from 'react';
import { useScrollStore } from '../stores/useScroll';

export const useScrollDetector = () => {
  const setIsScrolling = useScrollStore((state) => state.setIsScrolling);

  useEffect(() => {
    let timeout;

    const handleScrollOrTouch = () => {
      if (!useScrollStore.getState().isScrolling) setIsScrolling(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (useScrollStore.getState().isScrolling) setIsScrolling(false);
      }, 50);
    };

    window.addEventListener('scroll', handleScrollOrTouch, { passive: true });
    window.addEventListener('wheel', handleScrollOrTouch, { passive: true });
    window.addEventListener('touchmove', handleScrollOrTouch, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScrollOrTouch);
      window.removeEventListener('wheel', handleScrollOrTouch);
      window.removeEventListener('touchmove', handleScrollOrTouch);
      clearTimeout(timeout);
    };
  }, [setIsScrolling]);
};
