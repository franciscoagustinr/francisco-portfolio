import React from 'react';

export const DialogBox = ({ text }) => {
  return (
    <div className="dialog_box left 3xl:left-[59%] 3xl:rounded-2xl 3xl:p-4 3xl:text-2xl absolute hidden rounded-xl border-[2px] border-black bg-[#f4f4f4] p-2 font-Karla text-base transition-all duration-150 md:left-[58%] md:top-[64%] md:block lg:left-[59%] lg:top-[62%] 4xl:rounded-3xl 4xl:px-8 4xl:py-8 4xl:text-6xl">
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
