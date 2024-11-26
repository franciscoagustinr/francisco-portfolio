import React from "react";

export const DialogBox = ({ text }) => {
  return (
    <div className="dialog_box left absolute transition-all duration-150 left-[57%] 2xl:left-[59%] top-[62%] p-2 2xl:p-8 bg-[#f4f4f4] border-[2px] border-black rounded-xl 2xl:rounded-3xl font-Karla text-base 2xl:text-6xl">
      {text}
    </div>
  );
};
