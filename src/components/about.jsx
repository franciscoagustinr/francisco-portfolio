import React from "react";
import FranciscoPhoto from "../assets/francisco-photo.png";
import FranciscoFunPhoto from "../assets/francisco-fun-photo.png";

export const About = ({ setDialogText, setIsPopUpOpen, isPopUpOpen }) => {
  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };

  return (
    <div
      className="picture-container absolute top-6 left-2 cursor-pointer max-h-20 z-30"
      onClick={handleOpenPopUp}
    >
      <div
        className={`group relative max-h-20 transition-all duration-200`}
        onMouseEnter={() => setDialogText("Know more about me! 😄")}
        onMouseLeave={() => setDialogText("")}
      >
        <img
          src={FranciscoPhoto}
          alt="Francisco"
          className="opacity-1 group-hover:opacity-0 transition-all duration-300 ease-in-out relative !w-24 select-none"
        />
        <img
          src={FranciscoFunPhoto}
          alt="Francisco"
          className=" opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ease-in-out relative !w-24 -top-24 select-none"
        />
      </div>
    </div>
  );
};
