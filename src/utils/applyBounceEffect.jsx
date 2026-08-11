import { gsap } from 'gsap';

export const applyBounceEffect = (elements, isScrolling, isPopUpOpen) => {
  if (!isScrolling || isPopUpOpen || !elements.length) return;
  const currentScroll = WheelEvent.scrollY;

  gsap.to(elements, {
    y: -10,
    duration: 0.8,
    ease: 'elastic.out(15, 120)',
  });

  gsap.to(elements, {
    y: 0,
    delay: 0.3,
    duration: 0.8,
    ease: 'elastic.out(1.2, 0.2)',
  });
};
