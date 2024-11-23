import React from "react";

export const DialogBox = ({ text }) => {
  return (
    // <div className="dialog_box left absolute transition-all duration-150 left-[57%] top-[62%] p-2 bg-[#f4f4f4] border-[2.5px] border-black rounded-xl font-Inter text-sm">
    <div className="dialog_box left absolute transition-all duration-150 left-[57%] top-[62%] p-2 bg-[#f4f4f4] border-[2px] border-black rounded-xl font-Karla text-base">
      {text}
    </div>
  );
};
