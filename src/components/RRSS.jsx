import React, { useEffect, useRef } from 'react';
import GithubLogo from '../assets/github.png';
import LinkedinLogo from '../assets/linkedin.png';
import CoffeeCup from '../assets/coffee-cup.png';
import gsap from 'gsap';
import { useScrollStore } from '../stores/useScroll';
import { applyBounceEffect } from '../utils/applyBounceEffect';

export const RRSS = ({ setDialogText }) => {
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const coffeeRef = useRef(null);
  const elementsRef = [
    githubRef.current,
    linkedinRef.current,
    coffeeRef.current,
  ];
  const isScrolling = useScrollStore((state) => state.isScrolling);

  const playHoverSound = () => {
    const sound = new Howl({
      src: ['src/assets/elastic.mp3'],
      volume: 0.06,
    });
    sound.play();
  };

  const initHoverEffect = (el) => {
    let hover = false;
    let x, y, width;
    let hasPlayedSound = false;

    const calculatePosition = () => {
      gsap.set(el, { x: 0, y: 0, scale: 1 });
      const box = el.getBoundingClientRect();
      x = box.left + box.width / 2;
      y = box.top + box.height / 2 - 35;
      width = box.width;
    };

    const onMouseMove = (e) => {
      let isHover = false;
      const hoverArea = hover ? 1.3 : 1;
      const deltaX = e.clientX - x;
      const deltaY = e.clientY - y;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < width * hoverArea) {
        isHover = true;
        if (!hover) hover = true;
        onHover(e.clientX, e.clientY);
      }

      if (!isHover && hover) {
        onLeave();
        hover = false;
      }
    };

    const onHover = (mouseX, mouseY) => {
      gsap.to(el, {
        x: (mouseX - x) * 0.5,
        y: (mouseY - y) * 0.4,
        scale: 1.5,
        rotate: el === el.coffeeRef ? '-' : '10deg',
        ease: 'power1',
        duration: 0.2,
        onStart: () => {
          if (!hasPlayedSound) {
            playHoverSound();
            hasPlayedSound = true;
          }
        },
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        rotate: '0deg',
        ease: 'elastic.out(1.2, 0.4)',
        duration: 0.5,
        onStart: () => {
          hasPlayedSound = false;
        },
      });
      el.style.zIndex = 1;
    };

    calculatePosition();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', calculatePosition);
    };
  };

  useEffect(() => {
    const cleanupGithub = initHoverEffect(githubRef.current);
    const cleanupLinkedin = initHoverEffect(linkedinRef.current);
    const cleanupCoffe = initHoverEffect(coffeeRef.current);

    return () => {
      cleanupGithub();
      cleanupLinkedin();
      cleanupCoffe();
    };
  }, []);

  useEffect(() => {
    applyBounceEffect(elementsRef, isScrolling);
  }, [isScrolling]);

  return (
    <>
      <div
        className={`absolute bottom-2 right-2 z-50 lg:bottom-4 lg:right-14 4xl:bottom-12 4xl:right-20`}
      >
        <img
          ref={linkedinRef}
          src={LinkedinLogo}
          alt="github-logo"
          className="3xl:w-20 z-50 h-auto w-12 cursor-pointer select-none drop-shadow-lg md:w-14 4xl:w-44"
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/franciscoagustinr/',
              '_blank'
            );
          }}
          onMouseEnter={() => {
            setDialogText(
              "Where connections bloom <span class='text-2xl 3xl:text-4xl 4xl:text-7xl inline-block animate-pulse'> 🌱</span>"
            );
          }}
          onMouseLeave={() => {
            setDialogText('');
          }}
        />
      </div>
      <div className="3xl:right-44 absolute bottom-2 right-16 z-50 md:right-20 lg:bottom-4 lg:right-36 4xl:bottom-12 4xl:right-80">
        <img
          ref={githubRef}
          src={GithubLogo}
          alt="github-logo"
          className="3xl:w-20 z-50 h-auto w-12 cursor-pointer select-none drop-shadow-lg md:w-14 4xl:w-44"
          onClick={() => {
            window.open('https://github.com/franciscoagustinr', '_blank');
          }}
          onMouseEnter={() => {
            setDialogText(
              "Check out my most exciting projects! <span class='text-2xl 3xl:text-4xl 4xl:text-7xl inline-block animate-ping'>🚀</span>"
            );
          }}
          onMouseLeave={() => {
            setDialogText('');
          }}
        />
      </div>
      <div className="absolute bottom-2 left-1 z-50 lg:bottom-3 lg:left-5 4xl:bottom-12 4xl:left-14">
        <img
          ref={coffeeRef}
          src={CoffeeCup}
          alt="Coffee Cup"
          className="3xl:w-24 z-50 w-12 -rotate-12 cursor-pointer select-none drop-shadow-lg md:w-16 lg:w-20 4xl:w-56"
          onClick={() => {
            window.open('https://cafecito.app/franciscoagustinr', '_blank');
          }}
          onMouseEnter={() => {
            setDialogText(
              "Invite me a coffee! <span class='text-2xl 3xl:text-4xl 4xl:text-7xl inline-block animate-spin'>🙂 </span>"
            );
          }}
          onMouseLeave={() => {
            setDialogText('');
          }}
        />
      </div>
    </>
  );
};
