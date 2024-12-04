import React from 'react';

export const DialogBox = ({ text }) => {
  return (
    <div className="dialog_box left absolute rounded-xl border-[2px] border-black bg-[#f4f4f4] p-2 font-Karla text-base transition-all duration-150 md:left-[58%] md:top-[64%] lg:left-[57%] lg:top-[62%] 2xl:left-[59%] 2xl:rounded-2xl 4xl:p-6 4xl:text-6xl">
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
