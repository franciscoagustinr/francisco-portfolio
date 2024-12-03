import React, { useEffect, useState } from 'react';
import { usePreloader } from '../stores/usePreloader';

export const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const stopLoader = usePreloader((state) => state.stopLoader);

  useEffect(() => {
    if (progress === 100) {
      stopLoader();
    }
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
    <div className="left-1/2 z-50 mt-[29rem] h-[18px] w-11/12 rounded-full border-2 border-white p-0.5 md:w-[350px] 2xl:mt-[35rem] 2xl:w-2/6 4xl:mt-[80rem]">
      <div
        className={`loader h-[10px] rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(255,255,255,1)]`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
