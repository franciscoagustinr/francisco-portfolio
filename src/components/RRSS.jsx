import React from "react";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";

export const RRSS = ({ setDialogText }) => {
  return (
    <>
      <div className="absolute bottom-3 right-3 flex gap-3">
        <img
          src={GithubLogo}
          alt="github-logo"
          className="reflection w-12 h-auto cursor-pointer hover:rotate-12 transition-all duration-100"
          onClick={() => {
            window.open("https://github.com/franciscoagustinr", "_blank");
          }}
          onMouseEnter={() =>
            setDialogText("Check out my most exciting projects! 🚀")
          }
          onMouseLeave={() => setDialogText("")}
        />
        <img
          src={LinkedinLogo}
          alt="github-logo"
          className="w-12 h-auto cursor-pointer hover:rotate-12 transition-all duration-100 "
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/franciscoagustinr/",
              "_blank"
            );
          }}
          onMouseEnter={() =>
            setDialogText("Where opportunities and connections bloom 🌱")
          }
          onMouseLeave={() => setDialogText("")}
        />
      </div>
    </>
  );
};
