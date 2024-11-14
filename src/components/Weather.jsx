import React, { useEffect, useRef, useState } from "react";
import { GetWeather } from "./GetWeather";
import gsap from "gsap";
import ConfettiExplosion from "react-confetti-explosion";
// import BlackArrowSvg from "../assets/arrow-black.svg";

const WeatherData = ({
  setDialogText,
  hatName,
  triggerConfetti,
  setTriggerConfetti,
}) => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherRefContainer = useRef();

  useEffect(() => {
    gsap.to(".bg-talk", {
      "--bg-after": getHatBackground(hatName), // Función que devuelve el color o gradiente según `hatName`
      duration: 0.9,
      // ease: "power2.inOut",
      ease: "power1.in",
    });
  }, [hatName]);

  const getHatBackground = (hatName) => {
    switch (hatName) {
      case "NoneHat":
        return "#ec4899";
      case "OktopusHat":
        return "#9C2B7C";
      case "BatmanHat":
        return "#414AF0";
      case "ChineseHat":
        return "#DF9930";
      case "MickeyHat":
        return "#C39642";
      case "CowboyHat":
        return "#F49E00";
      case "SharkHat":
        return "#09CEFF";
      default:
        return "#ec4899";
    }
  };

  useEffect(() => {
    GetWeather(setWeatherData);

    document.documentElement.style.setProperty(
      "--bg-after",
      getHatBackground(hatName)
    );
  }, [hatName]);

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
        <div className="absolute left-1/2 top-14">
          <ConfettiExplosion
            force={0.2}
            particleCount={120}
            width={window.innerWidth}
            duration={1500}
          />
        </div>
      )}

      <div
        ref={weatherRefContainer}
        className="w-[250px] absolute xsm:right-3 sm:right-5 md:right-5 lg:right-[4%] top-11 z-40 text-[#FAFAFA]"
      >
        {weatherData ? (
          <div className="text-right font-NeueMontrealBook text-xs tracking-tight uppercase  ">
            <p className="">
              {weatherData.temperature2m}°C{" "}
              {weatherData && weatherData.isDay === 0 ? "🌙" : clima}{" "}
              <b className="pl-0.5">Buenos Aires, ARG 🇦🇷</b> {weatherData.time}
            </p>

            <div className="mt-0 flex flex-row justify-end items-center gap-2 pb-[3px] ">
              {/* <p className="bg-left-bottom bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-150 "> */}
              {/* lets talk!{" "} */}
              <a
                href="mailto:rodriguezfranciscoa@hotmail.com?subject=Wanna talk!"
                className="group"
                onMouseEnter={() => setDialogText("🎉 🎈 YAY! 🎉 🎈")}
                onMouseLeave={() => setDialogText("")}
                onClick={handleTriggerConfetti}
              >
                <span
                  className={`bg-talk after:bg-[var(--bg-after)] font-medium select-none pointer-events-none relative text-white flex flex-row after:content-[''] after:absolute after:!left-1.5 after:!bottom-[-2px] after:!w-20 after:!h-3 after:z-[-1] after:!transition-all after:!duration-150 group-hover:after:!-left-1 group-hover:after:!bottom-[-3px] group-hover:after:!rotate-3 group-hover:after:!w-[6.3rem] group-hover:after:!h-5`}
                >
                  lets talk!
                  {/* </p> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#fafafa"
                    className="group-hover:translate-x-1 transition-all duration-150"
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
    <div className="absolute !inset-0">
      <ConfettiExplosion
        force={0.2}
        particleCount={40}
        width={600}
        duration={1500}
      />
    </div>
  );
};
