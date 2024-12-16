import React, { useEffect, useRef, useState } from 'react';
import { getClickCount } from '../utils/getClickCount';
import { useScrollStore } from '../stores/useScroll';
import { applyBounceEffect } from '../utils/applyBounceEffect';
import { usePreloader } from '../stores/usePreloader';
import { useHatStore } from '../stores/useHatStore';
import gsap from 'gsap';

export const Count = () => {
  const [clickCount, setClickCount] = useState(null);
  const countIndicatorContainerRef = useRef();
  const [isAnimatingCount, setIsAnimatingCount] = useState(false);
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

    const letters = document.querySelectorAll('.exploding-letter');
    letters.forEach((letter, index) => {
      gsap.to(letter, {
        scale: 3,
        rotation: index % 2 === 0 ? 720 : -720,
        opacity: 0,
        x: 'random(-200, 200)',
        y: -50,
        duration: 0.8,
        delay: 0.05 * index,
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
    setIsAnimatingCount(true);
    const timeout = setTimeout(() => setIsAnimatingCount(false), 1000);
    return () => clearTimeout(timeout);
  }, [hatName, isLoading]);

  const splitTextIntoLetters = (text) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className="exploding-letter inline-block animate-gradientText bg-gradient-text bg-300% bg-clip-text text-transparent"
      >
        {letter}
      </span>
    ));
  };

  return (
    <div
      ref={countIndicatorContainerRef}
      className={`relative z-30 m-2 mb-20 w-fit min-w-[250px] scale-125 select-none rounded-lg border border-black bg-white bg-opacity-50 px-2 py-1 pr-0.5 shadow-md duration-200 md:mb-4 md:hover:scale-150 lg:min-w-[290px] lg:px-2.5 3xl:px-3 3xl:py-2 4xl:bottom-16 4xl:scale-[2.7] 4xl:hover:scale-[3.2] ${
        isAnimatingCount && 'animate-ping'
      }`}
    >
      <div className="relative h-full overflow-visible">
        <p className="flex items-center justify-center font-Karla text-sm md:text-base 3xl:text-2xl">
          Times people changed my look:
          <span className="ml-1 inline-block text-nowrap pr-1.5 text-center font-RecoletaBlack text-base tracking-wide lg:ml-2 lg:pr-0 lg:text-lg 3xl:text-3xl">
            {clickCount !== null && splitTextIntoLetters(clickCount.toString())}
          </span>
        </p>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden rounded-lg">
        <div className="absolute left-[-100%] top-0 h-full w-[30%] skew-x-[-20deg] animate-[shine_5s_infinite] bg-gradient-to-r from-white/20 via-white/60 to-white/20"></div>
      </div>
    </div>
  );
};
