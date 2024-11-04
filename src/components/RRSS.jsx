import React from "react";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";
import ResumeLogo from "../assets/rb_986.png";

export const RRSS = ({ setDialogText }) => {
  const handleOpenPDF = () => {
    // window.open("/assets/FranciscoAgustinRodriguez-CV.pdf", "_blank");
    window.open(
      "https://golden-daifuku-48cfde.netlify.app/static/media/FranciscoAgustinRodriguez-CV.6deac65fd1c4875d4fe3.pdf",
      "_blank"
    );
  };

  return (
    <>
      <div className="absolute bottom-3 right-3 flex gap-3">
        <img
          src={GithubLogo}
          alt="github-logo"
          className="reflection select-none w-12 h-auto cursor-pointer hover:rotate-12 transition-all duration-100"
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
          className="w-12 h-auto select-none cursor-pointer hover:rotate-12 transition-all duration-100 "
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/franciscoagustinr/",
              "_blank"
            );
          }}
          onMouseEnter={() => setDialogText("Where connections bloom 🌱")}
          onMouseLeave={() => setDialogText("")}
        />
        <img
          src={ResumeLogo}
          alt="resume-logo"
          className="w-12 h-auto select-none cursor-pointer hover:rotate-12 transition-all duration-100 "
          onClick={handleOpenPDF}
          onMouseEnter={() => setDialogText("See my resume 🤓")}
          onMouseLeave={() => setDialogText("")}
        />
      </div>
      {/* <img
        src={MailLogo}
        alt="github-logo"
        className="absolute left-3 top-4 w-16 h-auto cursor-pointer hover:rotate-12 transition-all duration-100 "
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
      /> */}
    </>
  );
};
