import React, { useEffect, useRef, useState } from 'react';
import { GetWeather } from '../utils/getWeather';
import gsap from 'gsap';
import ConfettiExplosion from 'react-confetti-explosion';
import { useConfettiStore } from '../stores/useTriggerConfetti-Talk';
import { useHatBackground } from '../hooks/useBackground';
import { useScrollStore } from '../stores/useScroll';
import { applyBounceEffect } from '../utils/applyBounceEffect';
// import BlackArrowSvg from "../assets/arrow-black.svg";

const WeatherData = ({ setDialogText, hatName }) => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherRefContainer = useRef();
  const triggerConfetti = useConfettiStore((state) => state.triggerConfetti);
  const setTriggerConfetti = useConfettiStore(
    (state) => state.setTriggerConfetti
  );
  const { getHexBackground } = useHatBackground();
  const isScrolling = useScrollStore((state) => state.isScrolling);

  useEffect(() => {
    applyBounceEffect('.weatherContainer', isScrolling);
  }, [isScrolling]);

  useEffect(() => {
    GetWeather(setWeatherData);
    // document.documentElement.style.setProperty(
    //   '--bg-after',
    //   getHexBackground(hatName)
    // );
    gsap.to(document.documentElement, {
      duration: 0.8,
      '--bg-after': getHexBackground(hatName),
      ease: 'power1.inOut',
    });
  }, [hatName]); //todo: improve

  const clima =
    weatherData && weatherData.temperature2m
      ? weatherData.temperature2m <= 10
        ? '☁️'
        : weatherData.temperature2m <= 15
          ? '🌥️'
          : weatherData.temperature2m <= 24
            ? '🌤️'
            : weatherData.temperature2m >= 25
              ? '🌞'
              : weatherData.temperature2m >= 32
                ? '🔥'
                : ''
      : null;

  const playHoverSound = () => {
    const sound = new Howl({
      src: ['src/assets/bubble-pop-buttons.mp3'],
      volume: 0.005,
    });
    sound.play();
  };
  const playConfettiSound = () => {
    const sound = new Howl({
      src: ['src/assets/woo-hoo.mp3'],
      volume: 0.07,
    });
    sound.play();
  };

  const handleTriggerConfetti = () => {
    setTriggerConfetti(true);
    playConfettiSound();
    setTimeout(() => setTriggerConfetti(false), 1500); // Duración del confeti
  };

  return (
    <>
      {triggerConfetti && (
        <>
          <div className="absolute left-0 top-0 md:-left-[50%] lg:-left-[180%]">
            <ConfettiExplosion
              force={0.2}
              particleCount={200}
              width={window.innerWidth}
              duration={1700}
            />
          </div>
          <div className="absolute left-0 top-1/3 lg:-left-1/3">
            <ConfettiExplosion
              force={0.5}
              particleCount={120}
              width={window.innerWidth / 2}
              duration={1800}
            />
          </div>
          <div className="absolute right-1/3 top-1/3 md:left-0">
            <ConfettiExplosion
              force={0.5}
              particleCount={120}
              width={window.innerWidth / 2}
              duration={1800}
            />
          </div>
        </>
      )}

      <div
        ref={weatherRefContainer}
        className="weatherContainer 3xl:w-auto w-56 text-[#FAFAFA] md:w-72"
      >
        {weatherData ? (
          <div className="3xl:text-xl text-right font-sans text-sm uppercase tracking-tight 4xl:text-5xl">
            <p className="select-none">
              {weatherData.temperature2m}°C{' '}
              {weatherData && weatherData.isDay === 0 ? '🌙' : clima}{' '}
              <b className="pl-0.5">Buenos Aires, ARG 🇦🇷</b> {weatherData.time}
            </p>

            <div className="mt-0 flex flex-row items-center justify-end gap-2 pb-[3px]">
              <a
                href="mailto:rodriguezfranciscoa@hotmail.com?subject=Wanna talk!"
                className="group"
                onMouseEnter={() => (
                  setDialogText(
                    "<span class='text-2xl 3xl:text-4xl 4xl:text-7xl inline-block'>🎉</span> <span class='text-2xl 3xl:text-4xl 4xl:text-7xl inline-block animate-shake'>🎈</span> YAY! <span class='text-2xl 3xl:text-4xl 4xl:text-7xl inline-block animate-shake'>🎈</span><span class='text-2xl 3xl:text-4xl 4xl:text-7xl inline-block'>🎉</span>"
                  ),
                  playHoverSound()
                )}
                onMouseLeave={() => setDialogText('')}
                onClick={handleTriggerConfetti}
              >
                <span
                  className={`bg-talk pointer-events-none relative flex select-none flex-row items-center font-RecoletaBlack font-semibold tracking-wide text-white transition-all duration-200 after:absolute after:!bottom-[-2px] after:!left-1.5 after:z-[-1] after:!h-4 after:!w-24 after:bg-[var(--bg-after)] after:!transition-all after:!duration-150 after:content-[''] group-hover:scale-110 group-hover:after:!-left-1 group-hover:after:!bottom-[-3px] group-hover:after:!h-6 group-hover:after:!w-[6.7rem] group-hover:after:!rotate-3 group-hover:after:shadow-md 4xl:mt-2 4xl:after:!left-5 4xl:after:!h-8 4xl:after:!w-[17rem] 4xl:group-hover:after:!-left-4 4xl:group-hover:after:!h-[4.2rem] 4xl:group-hover:after:!w-[22.5rem]`}
                >
                  lets talk!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fafafa"
                    className="w-4 transition-all duration-150 group-hover:translate-x-1.5 group-hover:drop-shadow-sm 4xl:w-14"
                  >
                    <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default WeatherData;

export const ConfettiExplosionTalk = () => {
  return (
    <>
      <div className="absolute">
        <ConfettiExplosion
          force={0.2}
          particleCount={40}
          width={600}
          duration={1500}
        />
      </div>
    </>
  );
};
