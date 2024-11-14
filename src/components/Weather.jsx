import React, { useEffect, useRef, useState } from "react";
import { GetWeather } from "./GetWeather";
// import BlackArrowSvg from "../assets/arrow-black.svg";

const WeatherData = ({ setDialogText }) => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherRefContainer = useRef();

  useEffect(() => {
    GetWeather(setWeatherData);
  }, []);

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
        : weatherData.temperature2m >= 34
        ? "🔥"
        : ""
      : null;

  return (
    <div
      ref={weatherRefContainer}
      className="w-[250px] absolute xsm:right-3 sm:right-5 md:right-5 lg:right-[4%] top-12 z-40 text-[#FAFAFA]"
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
            >
              <span className="select-none pointer-events-none relative text-white flex flex-row after:content-[''] after:bg-pink-700 after:absolute after:!left-1.5 after:!bottom-[-2px] after:!w-20 after:!h-3 after:z-[-1] after:!transition-all after:!duration-150 group-hover:after:!-left-1 group-hover:after:!bottom-[-3px] group-hover:after:!rotate-3 group-hover:after:!w-[6.3rem] group-hover:after:!h-5">
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
  );
};

export default WeatherData;

export const TextWithLinks = () => {
  return (
    <div className="relative w-[50vw] md:w-[75vw] mx-auto top-1/2 transform -translate-y-1/2 -translate-x-1/2 box-border">
      <p className="text-lg md:text-xl leading-relaxed mb-5">
        Here is some text which will contain some links for you to hover and see
        how nice a{" "}
        <a
          href="/"
          className="relative text-pink-500 after:content-[''] after:bg-pink-100 after:absolute after:left-3 after:bottom-[-6px] after:w-[calc(100%-8px)] after:h-[calc(100%-8px)] after:z-[-1] after:transition-all after:duration-300 hover:after:left-0 hover:after:bottom-[-2px] hover:after:w-full hover:after:h-full"
        >
          cubic-bezier
        </a>{" "}
        can make your hover effects, it's like a mini animation without the{" "}
        <a
          href="/"
          className="relative text-pink-500 after:content-[''] after:bg-pink-100 after:absolute after:left-3 after:bottom-[-6px] after:w-[calc(100%-8px)] after:h-[calc(100%-8px)] after:z-[-1] after:transition-all after:duration-300 hover:after:left-0 hover:after:bottom-[-2px] hover:after:w-full hover:after:h-full"
        >
          @keyframes!
        </a>{" "}
        If you wanna find out more about this transition effect then just click
        its link above.
      </p>
    </div>
  );
};
