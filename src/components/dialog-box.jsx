import React from "react";

export const DialogBox = ({ text }) => {
  return (
    <div className="absolute dialogbox transition-all duration-150 left-[57%] top-[55%] p-2 bg-[#f4f4f4] border-[2.5px] border-black rounded-xl dialog_box left font-Karla ">
      {text}
    </div>
  );
};
