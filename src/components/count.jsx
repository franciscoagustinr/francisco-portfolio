import React, { useEffect, useRef, useState } from 'react';
import { getClickCount } from '../utils/getClickCount';
import { useScrollStore } from '../stores/useScroll';
import { applyBounceEffect } from '../utils/applyBounceEffect';
import { usePreloader } from '../stores/usePreloader';
import gsap from 'gsap';
import { useHatStore } from '../stores/useHatStore';

export const Count = () => {
  const [clickCount, setClickCount] = useState(null);
  const countIndicatorContainerRef = useRef();
  const isLoading = usePreloader((state) => state.isLoading);
  const { hatName } = useHatStore();
  const isScrolling = useScrollStore((state) => state.isScrolling);

  useEffect(() => {
    const fetchClickCount = async () => {
      const count = await getClickCount();
      if (count !== null) {
        setClickCount(count);
      }
    };
    fetchClickCount();
  }, [hatName]);

  useEffect(() => {
    applyBounceEffect(countIndicatorContainerRef.current, isScrolling);
  }, [isScrolling]);

  useEffect(() => {
    if (isLoading) return;

    // Dividir el texto en letras
    const letters = document.querySelectorAll('.exploding-letter');
    letters.forEach((letter, index) => {
      gsap.to(letter, {
        scale: 3,
        rotation: index % 2 === 0 ? 720 : -720,
        opacity: 0,
        x: 'random(-200, 200)',
        y: -50,
        duration: 0.8,
        delay: 0.05,
        ease: 'power4.out',
        onComplete: () => {
          gsap.to(letter, {
            scale: 1,
            opacity: 1,
            rotation: 0,
            x: 0,
            y: 0,
            duration: 0,
            ease: 'power4.in',
          });
        },
      });
    });
  }, [hatName, isLoading]);

  const splitTextIntoLetters = (text) => {
    return text.split('').map((letter, index) => (
      <span key={index} className="exploding-letter inline-block">
        {letter}
      </span>
    ));
  };

  return (
    <div
      ref={countIndicatorContainerRef}
      className="relative m-2 mb-20 w-fit min-w-[270px] select-none rounded-md bg-white bg-opacity-50 px-2 py-1 md:mb-4"
    >
      <p className="font-KarlaLight text-base">
        Times people changed my look:
        <span className="countIndicator ml-1.5 inline-block text-center font-RecoletaBlack text-base tracking-wide lg:text-lg">
          {clickCount !== null && splitTextIntoLetters(clickCount.toString())}
        </span>
      </p>
    </div>
  );
};
