import { useEffect, useRef, useState } from 'react';
import { DialogBox } from './components/DialogBox';
import { Marquee } from './components/Marquee';
import { RRSS } from './components/RRSS';
import { Scene } from './components/canvas/Scene';
import { About } from './components/About';
import { LoadingBar } from './components/LoadingBar';
import { HandwrittenTexts } from './components/TextHandwritten';
import { PopUpAbout } from './components/about/PopUpAbout';
import { useHatBackground } from './hooks/useBackground';
import { useHatStore } from './stores/useHatStore';
import { useScrollDetector } from './hooks/useScrollDetector';
import { useScrollStore } from './stores/useScroll';
import { usePreloader } from './stores/usePreloader';
import { usePopupStore } from './stores/usePopUp';
import { getClickCount } from './utils/getClickCount';
import { Count } from './components/Count';
import WeatherData from './components/Weather';
import gsap from 'gsap';
import RotatingText from './components/RotatingText';
import { MusicIcon } from './components/MusicIcon';

function App() {
  const [dialogText, setDialogText] = useState(null);
  const { getGradientBackground } = useHatBackground();
  const { hatName } = useHatStore();
  useScrollDetector();
  const isScrolling = useScrollStore((state) => state.isScrolling);
  const isLoading = usePreloader((state) => state.isLoading);
  const isPopUpOpen = usePopupStore((state) => state.isPopUpOpen);

  useEffect(() => {
    if (!isScrolling || isPopUpOpen) return;
    setDialogText(
      "Nope, everything is here! <span class='inline-block 3xl:text-4xl 4xl:text-7xl text-xl'>🙃</span>"
    );
    setTimeout(() => setDialogText(''), 1800);
  }, [isScrolling, isPopUpOpen]);

  useEffect(() => {
    if (isLoading) return;
    gsap.to('.main-container', {
      background: getGradientBackground(hatName),
      duration: 1,
      ease: 'power4.in',
    });
  }, [getGradientBackground, hatName, isLoading]);

  useEffect(() => {
    if (isLoading) return;
    gsap.fromTo(
      '.rrss',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.8 }
    );
    gsap.fromTo(
      '.handwritten-texts',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.2 }
    );
    gsap.fromTo(
      '.about',
      { opacity: 0, y: 20, rotation: -180 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        rotation: 0,
        ease: 'power3.out',
        delay: 1.4,
      }
    );
    gsap.fromTo(
      '.weather',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.4 }
    );
    gsap.fromTo(
      '.count-container',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 0.9,
        ease: 'power2.out',
      }
    );
    gsap.fromTo(
      '.music-icon',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.1 }
    );
  }, [isLoading]);

  useEffect(() => {
    getClickCount();
    console.log(
      '%c❤️ SITE MADE WITH LOVE BY FRANCISCO AGUSTIN ❤️',
      'background-color: #047692; color: white; padding: 20px;'
    );
  }, []);

  const playHoverSound = () => {
    const sound = new Howl({
      src: ['assets/sounds/bubble-pop-buttons.mp3'],
      volume: 0.01,
    });
    sound.play();
  };

  return (
    <div
      className={`main-container h-screen !overflow-hidden ${isLoading && 'bg-[#101720]'}`}
    >
      <Scene setDialogText={setDialogText} />
      {isLoading && (
        <>
          <div className="absolute inset-0 flex w-full items-center justify-center">
            <LoadingBar />
            <RotatingText />
          </div>
        </>
      )}

      {!isLoading && (
        <>
          <Marquee />
          <div className="handwritten-texts absolute top-0 z-50 w-full">
            <HandwrittenTexts />
          </div>
          <PopUpAbout hatName={hatName} />
          <div
            onMouseEnter={playHoverSound}
            className="about absolute -left-4 top-4 lg:left-2 lg:top-6"
          >
            <About setDialogText={setDialogText} />
          </div>
          <div className="rrss">
            <RRSS setDialogText={setDialogText} />
          </div>
          <div className="weather absolute right-3.5 top-8 z-30 lg:right-16 3xl:top-10 4xl:right-[2%] 4xl:top-28">
            <WeatherData setDialogText={setDialogText} hatName={hatName} />
          </div>
          <div className="count-container absolute bottom-2 left-1/2 z-10 -translate-x-1/2 transform">
            <Count />
          </div>
          <div
            onMouseEnter={playHoverSound}
            className="music-icon absolute right-2.5 top-36 z-10 md:bottom-36 md:right-2 md:top-auto lg:right-12 3xl:right-10 4xl:bottom-96"
          >
            <MusicIcon setDialogText={setDialogText} />
          </div>
          <div className="absolute -right-[3.5rem] top-1/2 -rotate-90 select-none">
            <p className="font-mono text-xs text-white opacity-30">
              ALL RIGHTS RESERVED.
            </p>
          </div>
          {dialogText && <DialogBox text={dialogText} />}
        </>
      )}
    </div>
  );
}

export default App;
