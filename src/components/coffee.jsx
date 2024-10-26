import React from "react";
import CoffeeCup from "../assets/coffee-cup.png";

export const Coffee = ({ setDialogText }) => {
  return (
    <>
      <div className="absolute left-1 bottom-2">
        <img
          src={CoffeeCup}
          alt="Coffee Cup"
          className="shake w-24 -rotate-12 cursor-pointer relative"
          onClick={() => {
            window.open("https://cafecito.app/franciscoagustinr", "_blank");
          }}
          onMouseEnter={() => setDialogText("Invite me a coffee! 🙂 ")}
          onMouseLeave={() => setDialogText("")}
        />
      </div>
    </>
  );
};
