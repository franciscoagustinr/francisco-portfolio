import React, { useEffect, useRef, useState } from "react";
import { GetWeather } from "../utils/GetWeather";
import gsap from "gsap";
import ConfettiExplosion from "react-confetti-explosion";
import { useConfettiStore } from "../stores/useTriggerConfetti-Talk";
import { useHatBackground } from "../hooks/useBackground";
import { useScrollStore } from "../stores/useScroll";
import { applyBounceEffect } from "../utils/applyBounceEffect";
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
    applyBounceEffect(".weatherContainer", isScrolling);
  }, [isScrolling]);

  useEffect(() => {
    gsap.to(".bg-talk", {
      "--bg-after": getHexBackground(hatName), // Función que devuelve el color o gradiente según `hatName`
      duration: 0.9,
      // ease: "power2.inOut",
      ease: "power1.in",
    });
  }, [hatName]);

  useEffect(() => {
    GetWeather(setWeatherData);
    document.documentElement.style.setProperty(
      "--bg-after",
      getHexBackground(hatName)
    );
  }, [hatName]); //todo: improve

  const clima =
    weatherData && weatherData.temperature2m
      ? weatherData.temperature2m <= 10
        ? "☁️"
        : weatherData.temperature2m <= 15
        ? "🌥️"
        : weatherData.temperature2m <= 24
        ? "🌤️"
        : weatherData.temperature2m >= 25
        ? "🌞"
        : weatherData.temperature2m >= 32
        ? "🔥"
        : ""
      : null;

  const handleTriggerConfetti = () => {
    setTriggerConfetti(true);
    setTimeout(() => setTriggerConfetti(false), 1500); // Duración del confeti
  };

  return (
    <>
      {triggerConfetti && (
        <>
          <div className="absolute left-1/2 top-0">
            <ConfettiExplosion
              force={0.2}
              particleCount={200}
              width={window.innerWidth}
              duration={1700}
            />
          </div>
          <div className="absolute left-1/3 top-1/3">
            <ConfettiExplosion
              force={0.5}
              particleCount={120}
              width={window.innerWidth / 2}
              duration={1800}
            />
          </div>
          <div className="absolute right-1/3 top-1/3">
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
        className="weatherContainer w-72 4xl:w-auto text-[#FAFAFA]"
      >
        {weatherData ? (
          <div className="text-right font-sans text-sm 4xl:text-5xl tracking-tight uppercase  ">
            <p className="">
              {weatherData.temperature2m}°C{" "}
              {weatherData && weatherData.isDay === 0 ? "🌙" : clima}{" "}
              <b className="pl-0.5">Buenos Aires, ARG 🇦🇷</b> {weatherData.time}
            </p>

            <div className="mt-0 flex flex-row justify-end items-center gap-2 pb-[3px] ">
              <a
                href="mailto:rodriguezfranciscoa@hotmail.com?subject=Wanna talk!"
                className="group"
                onMouseEnter={() =>
                  setDialogText(
                    "<span class='text-2xl inline-block'>🎉</span> <span class='text-2xl inline-block animate-shake'>🎈</span> YAY! <span class='text-2xl inline-block animate-shake'>🎈</span><span class='text-2xl inline-block'>🎉</span>"
                  )
                }
                onMouseLeave={() => setDialogText("")}
                onClick={handleTriggerConfetti}
              >
                <span
                  className={`bg-talk 4xl:mt-2 after:bg-[var(--bg-after)] font-semibold select-none pointer-events-none relative text-white flex flex-row items-center after:content-[''] after:absolute after:!left-1.5 4xl:after:!left-5 after:!bottom-[-2px] after:!w-24 4xl:after:!w-[17rem] after:!h-4 4xl:after:!h-8 after:z-[-1] after:!transition-all after:!duration-150 group-hover:scale-110 group-hover:after:!-left-1 4xl:group-hover:after:!-left-4 group-hover:after:!bottom-[-3px] group-hover:after:!rotate-3 group-hover:after:!w-[6.7rem] 4xl:group-hover:after:!w-[22.5rem] group-hover:after:shadow-md group-hover:after:!h-6 4xl:group-hover:after:!h-[4.2rem] font-RecoletaBlack tracking-wide transition-all duration-200  `}
                >
                  lets talk!
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fafafa"
                    className="group-hover:translate-x-1.5 w-4 4xl:w-14 group-hover:drop-shadow-sm transition-all duration-150"
                  >
                    <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default WeatherData;

export const ConfettiExplosionTalk = () => {
  return (
    <>
      <div className="absolute  ">
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
