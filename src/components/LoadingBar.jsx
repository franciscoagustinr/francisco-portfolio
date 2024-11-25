import React, { useEffect, useState } from "react";
import { usePreloader } from "../stores/usePreloader";

export const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const stopLoader = usePreloader((state) => state.stopLoader);

  useEffect(() => {
    if (progress === 100) {
      stopLoader();
    }
    console.log(progress);
  }, [progress, stopLoader]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval); // Detener al llegar al 100%
            return 100;
          }
          const randomIncrement = Math.floor(Math.random() * 10) + 1; // Generar un valor aleatorio entre 1 y 10
          const newProgress = prev + randomIncrement;
          return newProgress > 100 ? 100 : newProgress; // Asegurar que no exceda 100
        });
      }, 250);

      return () => clearInterval(interval); // Limpieza del intervalo
    }, 1000);

    return () => clearTimeout(timeout); // Limpieza del timeout al desmontar
  }, []);

  return (
    <div className="absolute z-50 top-[80%] left-[38%] w-[350px] h-[18px] border-2 border-white rounded-full p-0.5">
      <div
        // className={`loader h-[10px] bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(255,255,255,1)] w-[${progress}]`}
        className={`loader h-[10px] bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(255,255,255,1)]`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
