import React from "react";

export const DialogBox = ({ text }) => {
  return (
    <div className="dialog_box left absolute transition-all duration-150 left-[57%] 2xl:left-[59%] top-[62%] p-2 4xl:p-6 bg-[#f4f4f4] border-[2px] border-black rounded-xl 2xl:rounded-2xl font-Karla text-base 4xl:text-6xl ">
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};
