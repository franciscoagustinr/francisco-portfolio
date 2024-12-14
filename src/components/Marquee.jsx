import React from 'react';

export const Marquee = () => {
  return (
    <div className="absolute top-0 z-50 flex w-full select-none overflow-hidden bg-[#217281] bg-opacity-30">
      <div className="animate-marquee 3xl:text-base inline-flex min-w-full whitespace-nowrap py-1 font-sans text-xs font-extralight text-white hover:[animation-play-state:paused] 4xl:py-3 4xl:text-4xl">
        <span>{`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(20)}</span>
        <span>{`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(20)}</span>
      </div>
    </div>
  );
};
