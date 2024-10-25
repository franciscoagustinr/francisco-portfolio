import React, { useEffect, useRef, useState } from "react";
import { GetWeather } from "./GetWeather";
// import BlackArrowSvg from "../assets/arrow-black.svg";

const WeatherData = () => {
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
      className="w-[250px] absolute xsm:right-3 sm:right-5 md:right-5 lg:right-[10%] top-16 z-[9999] text-[#FAFAFA] "
    >
      {weatherData ? (
        <div className="text-right font-NeueMontrealBook text-xs tracking-tight uppercase  ">
          <p className="">
            {weatherData.temperature2m}°C{" "}
            {weatherData && weatherData.isDay === 0 ? "🌙" : clima}{" "}
            <b>Buenos Aires</b> {weatherData.time}
          </p>
          <p className="inline-block">
            <a
              href="mailto:rodriguezfranciscoa@hotmail.com?subject=Wanna talk!"
              className="group"
            >
              <div className=" mt-1 flex flex-row justify-center items-center gap-2 pb-[3px] ">
                <span className="bg-left-bottom bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-150 ">
                  lets talk!
                </span>
                <div className="flex p-[5px] bg-[white] rounded-full transition-all duration-300 ">
                  {/* <img
                      src={BlackArrowSvg}
                      className="arrow w-2 transition-all duration-300 "
                    /> */}
                </div>
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
