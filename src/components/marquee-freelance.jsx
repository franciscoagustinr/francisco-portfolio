import React from "react";

export const Marquee = () => {
  return (
    <div className="marquee-container absolute top-0 z-50 w-full overflow-hidden bg-black">
      <div className="marquee text-white font-Karla font-extralight text-xs py-1 whitespace-nowrap flex">
        <span>{`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(20)}</span>
        <span>{`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(20)}</span>
      </div>
    </div>
  );
};
