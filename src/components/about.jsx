import React from "react";
import FranciscoPhoto from "../assets/francisco-photo.png";
import FranciscoFunPhoto from "../assets/617883fc59767869-sticker.png";

export const About = ({ setDialogText }) => {
  return (
    <div
      className="picture-container absolute top-5 -left-2 cursor-pointer z-40"
      onMouseEnter={() => setDialogText("Know more about me! 😄")}
      onMouseLeave={() => setDialogText("")}
    >
      <div className="relative ">
        <img
          src={FranciscoPhoto}
          alt="Francisco"
          className="image relative photo !w-20"
        />
        <img
          src={FranciscoFunPhoto}
          alt="Francisco"
          className="image relative fun-photo !w-20 -top-20"
        />
      </div>
    </div>
  );
};
