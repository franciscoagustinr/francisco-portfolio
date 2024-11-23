import { gsap } from "gsap";

export const applyBounceEffect = (elements, isScrolling) => {
  if (!isScrolling || !elements.length) return;
  const currentScroll = WheelEvent.scrollY;

  // Animación de rebote
  gsap.to(elements, {
    y: -10, // Mueve hacia abajo/arriba
    duration: 0.8, // Duración ajustada
    ease: "elastic.out(15, 120)", // Rebote exagerado (tensión alta, retención baja)
  });

  // Regresar al estado inicial después del rebote
  gsap.to(elements, {
    y: 0,
    delay: 0.3, // Esperar a que termine el rebote
    duration: 0.8,
    ease: "elastic.out(1.2, 0.2)", // Rebote menos agresivo al volver
  });
};
