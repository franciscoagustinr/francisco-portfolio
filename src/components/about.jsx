import React from "react";
import FranciscoPhoto from "../assets/francisco-photo.png";
import FranciscoFunPhoto from "../assets/617883fc59767869-sticker.png";

export const About = ({ setDialogText }) => {
  return (
    <div className="picture-container absolute top-6 -left-1 cursor-pointer z-40 max-h-20">
      <div
        className="relative max-h-20"
        onMouseEnter={() => setDialogText("Know more about me! 😄")}
        onMouseLeave={() => setDialogText("")}
      >
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
