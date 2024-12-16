import React from 'react';
import GreenCircle from '../assets/images/green-circle.png';

export const Marquee = () => {
  const repeatedContent = Array.from({ length: 20 }, (_, i) => (
    <React.Fragment key={i}>
      AVAILABLE FOR FREELANCE WORK
      <img
        src={GreenCircle}
        alt="Green Circle"
        className="mx-1 inline-block aspect-square w-3 object-contain"
      />
    </React.Fragment>
  ));

  return (
    <div className="absolute top-0 z-50 flex w-full select-none overflow-hidden bg-[#217281] bg-opacity-30">
      <div className="inline-flex min-w-full animate-marquee whitespace-nowrap py-1 font-sans text-xs font-extralight text-white hover:[animation-play-state:paused] 3xl:text-base 4xl:py-3 4xl:text-4xl">
        <span>{repeatedContent}</span>
        <span>{repeatedContent}</span>
      </div>
    </div>
  );
};
