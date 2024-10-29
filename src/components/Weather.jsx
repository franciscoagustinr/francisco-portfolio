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
          <p className="inline-block">
            <a
              href="mailto:rodriguezfranciscoa@hotmail.com?subject=Wanna talk!"
              className="group"
              onMouseEnter={() => setDialogText("🎉 🎈 YAY! 🎉 🎈")}
              onMouseLeave={() => setDialogText("")}
            >
              <div className="mt-0 flex flex-row justify-center items-center gap-2 pb-[3px] ">
                <p className="bg-left-bottom bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-150 ">
                  lets talk!{" "}
                </p>
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
              </div>
            </a>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherData;
