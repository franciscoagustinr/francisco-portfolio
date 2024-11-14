import React, { useEffect, useRef } from "react";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";
import gsap from "gsap";
// import ResumeLogo from "../assets/rb_986.png";
import CoffeeCup from "../assets/coffee-cup.png";

export const RRSS = ({ setDialogText }) => {
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const coffeeRef = useRef(null);

  const initHoverEffect = (el) => {
    let hover = false;
    let x, y, width;

    const calculatePosition = () => {
      gsap.set(el, { x: 0, y: 0, scale: 1 });
      const box = el.getBoundingClientRect();
      x = box.left + box.width / 2;
      y = box.top + box.height / 2;
      width = box.width;
    };

    const onMouseMove = (e) => {
      let isHover = false;
      const hoverArea = hover ? 1.2 : 0.7;
      const deltaX = e.clientX - x;
      const deltaY = e.clientY - y;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < width * hoverArea) {
        isHover = true;
        if (!hover) hover = true;
        onHover(e.clientX, e.clientY);
      }

      if (!isHover && hover) {
        onLeave();
        hover = false;
      }
    };

    const onHover = (mouseX, mouseY) => {
      gsap.to(el, {
        x: (mouseX - x) * 0.5,
        y: (mouseY - y) * 0.4,
        scale: 1.4,
        rotate: el === el.coffeeRef ? "-" : "10deg",
        ease: "power1",
        duration: 0.2,
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        rotate: "0deg",
        ease: "elastic.out(1.2, 0.4)",
        duration: 0.5,
      });
      el.style.zIndex = 1;
    };

    calculatePosition();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", calculatePosition);
    };
  };

  useEffect(() => {
    const cleanupGithub = initHoverEffect(githubRef.current);
    const cleanupLinkedin = initHoverEffect(linkedinRef.current);
    const cleanupCoffe = initHoverEffect(coffeeRef.current);

    return () => {
      cleanupGithub();
      cleanupLinkedin();
      cleanupCoffe();
    };
  }, []);

  return (
    <>
      <div className="absolute bottom-3 right-3">
        <img
          ref={linkedinRef}
          src={LinkedinLogo}
          alt="github-logo"
          className="w-14 h-auto select-none cursor-pointer "
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/franciscoagustinr/",
              "_blank"
            );
          }}
          onMouseEnter={() => setDialogText("Where connections bloom 🌱")}
          onMouseLeave={() => setDialogText("")}
        />
      </div>
      <div className="absolute bottom-3 right-20">
        <img
          ref={githubRef}
          src={GithubLogo}
          alt="github-logo"
          className="reflection select-none w-14  h-auto cursor-pointer"
          onClick={() => {
            window.open("https://github.com/franciscoagustinr", "_blank");
          }}
          onMouseEnter={() =>
            setDialogText("Check out my most exciting projects! 🚀")
          }
          onMouseLeave={() => setDialogText("")}
        />
      </div>
      <div className="absolute left-1 bottom-2">
        <img
          ref={coffeeRef}
          src={CoffeeCup}
          alt="Coffee Cup"
          className=" select-none w-24 -rotate-12 cursor-pointer relative"
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
//  <img
//           src={ResumeLogo}
//           alt="resume-logo"
//           className="w-12 h-auto select-none cursor-pointer hover:rotate-12 transition-all duration-100 "
//           onClick={handleOpenPDF}
//           onMouseEnter={() => setDialogText("See my resume 🤓")}
//           onMouseLeave={() => setDialogText("")}
//         />
// const handleOpenPDF = () => {
//   // window.open("/assets/FranciscoAgustinRodriguez-CV.pdf", "_blank");
//   window.open(
//     "https://golden-daifuku-48cfde.netlify.app/static/media/FranciscoAgustinRodriguez-CV.6deac65fd1c4875d4fe3.pdf",
//     "_blank"
//   );
// };
