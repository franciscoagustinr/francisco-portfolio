import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react';

const RotatingText = () => {
  const titles = ['Hi!', 'Hola!', 'Bonjour!', 'Ciao!', 'こんにちは!'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll('span');
      const tl = gsap.timeline();

      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: 20,
          rotateX: -20,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.1,
          stagger: 0.02,
        }
      ).to(
        chars,
        {
          opacity: 0,
          y: -30,
          rotateX: 90,
          duration: 0.1,
          stagger: 0.02,
        },
        '+=1'
      );
    }
  }, [currentIndex]);

  return (
    <div className="absolute top-[28%] z-50 w-full text-center 4xl:top-[26%]">
      <p
        ref={textRef}
        className="text-center font-RecoletaBlack text-4xl font-bold leading-none tracking-wider text-white 4xl:pl-36 4xl:text-8xl"
      >
        {titles[currentIndex].split('').map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default RotatingText;
