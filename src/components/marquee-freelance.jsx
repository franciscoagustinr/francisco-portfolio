import React from "react";

export const Marquee = () => {
  return (
    <div className="absolute top-0 z-50 w-full overflow-hidden">
      <div className="marquee text-white font-Karla font-extralight text-xs py-1 whitespace-nowrap flex">
        <div className="whitespace-nowrap">
          {`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(30)}
        </div>
        <div className="whitespace-nowrap">
          {`AVAILABLE FOR FREELANCE WORK 🟢 `.repeat(30)}
        </div>
      </div>
    </div>
  );
};
