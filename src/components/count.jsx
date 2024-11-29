import React, { useEffect, useRef, useState } from "react";
import { getClickCount } from "../utils/getClickCount";
import { useScrollStore } from "../stores/useScroll";
import { applyBounceEffect } from "../utils/applyBounceEffect";
import { usePreloader } from "../stores/usePreloader";
import gsap from "gsap";
import { useHatStore } from "../stores/useHatStore";

export const Count = () => {
  const [clickCount, setClickCount] = useState(null);
  const countIndicatorContainerRef = useRef();
  const isLoading = usePreloader((state) => state.isLoading);
  const { hatName } = useHatStore();

  useEffect(() => {
    const fetchClickCount = async () => {
      const count = await getClickCount();
      if (count !== null) {
        setClickCount(count);
      }
    };
    fetchClickCount();
  }, []);

  const isScrolling = useScrollStore((state) => state.isScrolling);

  useEffect(() => {
    applyBounceEffect(countIndicatorContainerRef.current, isScrolling);
  }, [isScrolling]);

  // useEffect(() => {
  //   if (isLoading) return;

  //   // Animación para cada letra individualmente
  //   const letters = document.querySelectorAll(".countIndicator");
  //   letters.forEach((letter, index) => {
  //     gsap.to(letter, {
  //       scale: 3, // Aumentar el tamaño de la letra
  //       rotation: index / 2 === 0 ? 720 : -720, // Rotar la letra
  //       opacity: 0, // Hacer desaparecer la letra
  //       x: "random(-200, 200)", // Desplazar la letra aleatoriamente en X
  //       y: "random(-200, 200)", // Desplazar la letra aleatoriamente en Y
  //       duration: 1, // Duración de la animación
  //       delay: index * 0.05, // Retraso incremental para cada letra
  //       ease: "power4.out", // Suavizado de la animación
  //       onComplete: () => {
  //         // Regresar a la posición original después de la explosión
  //         gsap.to(letter, {
  //           scale: 1,
  //           opacity: 1,
  //           rotation: 0,
  //           x: 0,
  //           y: 0,
  //           duration: 0,
  //           ease: "power4.in",
  //         });
  //       },
  //     });
  //   });
  // }, [hatName, isLoading]);

  useEffect(() => {
    if (isLoading) return;

    // Dividir el texto en letras
    const letters = document.querySelectorAll(".exploding-letter");
    letters.forEach((letter, index) => {
      gsap.to(letter, {
        scale: 3,
        rotation: index % 2 === 0 ? 720 : -720,
        opacity: 0,
        x: "random(-200, 200)",
        y: -50,
        duration: 0.8,
        delay: 0.05,
        ease: "power4.out",
        onComplete: () => {
          gsap.to(letter, {
            scale: 1,
            opacity: 1,
            rotation: 0,
            x: 0,
            y: 0,
            duration: 0,
            ease: "power4.in",
          });
        },
      });
    });
  }, [hatName, isLoading]);

  const splitTextIntoLetters = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className="exploding-letter inline-block">
        {letter}
      </span>
    ));
  };

  return (
    <div
      ref={countIndicatorContainerRef}
      className="w-fit py-1 px-2 bg-white bg-opacity-50 m-2 rounded-md select-none relative"
    >
      <p className="font-KarlaLight text-base ">
        Times people changed my look:
        {/* <span className="font-Karla ml-1"> */}
        <span className="countIndicator font-RecoletaBlack ml-1 text-lg inline-block">
          {/* {clickCount !== null && clickCount} */}
          {clickCount !== null && splitTextIntoLetters(clickCount.toString())}
        </span>
      </p>
    </div>
  );
};
