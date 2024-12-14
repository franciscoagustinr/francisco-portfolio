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
            clearInterval(interval);
            return 100;
          }
          const randomIncrement = Math.floor(Math.random() * 10) + 1;
          const newProgress = prev + randomIncrement;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 250);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="3xl:mt-[35rem] 3xl:w-2/6 left-1/2 z-50 mt-[29rem] h-[18px] w-11/12 rounded-full border-2 border-white p-0.5 md:w-[350px] 4xl:mt-[80rem]">
      <div
        className={`loader h-[10px] rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(255,255,255,1)]`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
