import React from 'react';
import { Scene } from './canvas/Scene';

export const NotFound = () => {
  const goToHome = () => {
    window.location.replace('/');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-200">
      <div className="absolute z-10 h-full w-full">
        <Scene />
      </div>
      <div className="absolute text-center">
        <div className="relative -top-52 z-50 flex flex-col gap-1">
          <span className="gradient-text font-RecoletaBlack text-8xl text-black 4xl:text-4xl">
            Oops!
          </span>
          <span className="font-KarlaLight text-base text-black 4xl:text-4xl">
            Look like you're lost
          </span>
        </div>
        <p className="marquee404 relative top-5 flex whitespace-nowrap py-1 font-KarlaExtraBold text-6xl font-bold text-red-500 4xl:py-3 4xl:text-4xl">
          {` 404 —`.repeat(30)}
        </p>
        <p className="marquee404-text relative top-7 font-KarlaLight text-base">
          {` Page not found - `.repeat(30)}
        </p>
        <button
          className="button-home-page relative top-40 z-50 rounded-xl bg-cyan-500 px-5 py-2 font-Inter text-xl tracking-tight text-white shadow-sm transition-all hover:rotate-2 hover:scale-110 active:scale-125"
          onClick={goToHome}
        >
          GO TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};
