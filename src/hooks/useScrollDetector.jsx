import { useEffect } from 'react';
import { useScrollStore } from '../stores/useScroll';

export const useScrollDetector = () => {
  const setIsScrolling = useScrollStore((state) => state.setIsScrolling);

  useEffect(() => {
    let timeout;

    const handleScrollOrTouch = () => {
      setIsScrolling(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 50);
    };

    window.addEventListener('scroll', handleScrollOrTouch);
    window.addEventListener('wheel', handleScrollOrTouch);
    window.addEventListener('touchmove', handleScrollOrTouch);

    return () => {
      window.removeEventListener('scroll', handleScrollOrTouch);
      window.removeEventListener('wheel', handleScrollOrTouch);
      window.removeEventListener('touchmove', handleScrollOrTouch);
      clearTimeout(timeout);
    };
  }, [setIsScrolling]);
};
