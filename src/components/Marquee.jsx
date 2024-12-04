import React from "react";

export const Marquee = () => {
  return (
    <div className="select-none marquee-container absolute top-0 z-50 w-full overflow-hidden bg-[#217281] bg-opacity-30">
      <div className="marquee text-white font-sans font-extralight text-xs 4xl:text-4xl py-1 4xl:py-3 whitespace-nowrap flex">
        <span>{`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(20)}</span>
        <span>{`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(20)}</span>
      </div>
    </div>
  );
};