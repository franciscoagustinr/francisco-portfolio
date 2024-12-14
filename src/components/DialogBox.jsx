import React from 'react';

export const DialogBox = ({ text }) => {
  return (
    <div className="animate-dialogBox 3xl:left-[59%] 3xl:rounded-2xl 3xl:p-4 3xl:text-2xl absolute hidden rounded-xl border-[2px] border-black bg-[#f4f4f4] p-2 font-Karla text-base transition-all duration-150 before:absolute before:right-full before:top-1/2 before:-mt-[9px] before:h-0 before:w-0 before:border-[8px] before:border-b-transparent before:border-l-transparent before:border-r-[#000] before:border-t-transparent before:content-[''] after:absolute after:right-full after:top-1/2 after:-mt-[6.5px] after:h-0 after:w-0 after:border-[5.5px] after:border-b-transparent after:border-l-transparent after:border-r-[#f4f4f4] after:border-t-transparent after:content-[''] md:left-[58%] md:top-[64%] md:block lg:left-[59%] lg:top-[62%] 4xl:rounded-3xl 4xl:px-8 4xl:py-8 4xl:text-6xl">
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
