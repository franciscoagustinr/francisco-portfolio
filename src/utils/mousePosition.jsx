import React from 'react';

export const mousePosition = { x: 0, y: 0 };

let activeSubscriptions = 0;
let removeListener = null;

const handleMouseMove = (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
};

const subscribe = () => {
  if (activeSubscriptions === 0) {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    removeListener = () =>
      window.removeEventListener('mousemove', handleMouseMove);
  }
  activeSubscriptions += 1;

  return () => {
    activeSubscriptions -= 1;
    if (activeSubscriptions === 0 && removeListener) {
      removeListener();
      removeListener = null;
    }
  };
};

export const useMousePosition = () => {
  React.useEffect(() => subscribe(), []);
  return mousePosition;
};
