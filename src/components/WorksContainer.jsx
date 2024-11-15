import React, { useEffect, useState } from "react";
import { Works } from "../utilities/Works";
import { useMousePosition } from "../utilities/mousePosition";

export const WorksContainer = ({ hatName }) => {
  const mousePosition = useMousePosition();
  const [hovered, setHovered] = useState(false);

  const getHatBackground = (hatName) => {
    switch (hatName) {
      case "NoneHat":
        return "#ec4899";
      case "OktopusHat":
        return "#9C2B7C";
      case "BatmanHat":
        return "#414AF0";
      case "ChineseHat":
        return "#DF9930";
      case "MickeyHat":
        return "#C39642";
      case "CowboyHat":
        return "#F49E00";
      case "SharkHat":
        return "#09CEFF";
      default:
        return "#ec4899";
    }
  };
  const dynamicColor = getHatBackground(hatName);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorIcon =
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='75' height='90' viewport='0 0 100 100' style='fill:black;font-size:45px;'><text y='50%'>💌</text></svg>\") 16 0, auto ";

      document.body.style.cursor = hovered ? cursorIcon : "auto";
    };

    if (hovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      document.body.style.cursor = "auto";
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovered]);

  return (
    <div
      style={{
        "--dynamic-color": dynamicColor,
      }}
    >
      {Works &&
        Works.map((work) => {
          const rotateClass = work.id % 2 === 0 ? "-rotate-12" : "rotate-12";
          return (
            <div key={work.id} className="group relative mb-2">
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group z-50"
              >
                <div className="relative left-[15rem]">
                  <div
                    style={{
                      left: (mousePosition.x / Math.PI - 250) / 4,
                      //   right: -mousePosition.x / Math.PI + 410,
                      // top: mousePosition.y * -0.1,
                    }}
                    className="absolute"
                  >
                    <img
                      src={work.imageURL}
                      alt={work.name}
                      className={`relative w-[190px] max-h-[200px] object-cover scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 z-50 border border-[#FAFAFA] ${rotateClass}`}
                    />
                  </div>
                </div>

                <div className="flex flex-row no-wrap justify-start items-center gap-2 p-2 text-left border-b border-[#fff] border-opacity-40 transition-all ease-in-out duration-300">
                  <div className="p-2 rounded-full opacity-0 group-hover:opacity-100 ">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-3.5 -translate-x-2 group-hover:translate-x-0 group-hover:brightness-150 origin-top-left group-hover:rotate-0 rotate-45 transition-all duration-200"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0855 5.5714L14 6.49971L13.0858 7.42892L7.60055 13L6.68634 12.0714L11.5902 7.09018H1.29288H0.646521H0V-5.45053e-05H1.29288V5.77693H11.4595L6.68636 0.928618L7.60057 0L13.0855 5.5714Z"
                        // fill="#fff"
                        fill={"var(--dynamic-color)"}
                      />
                    </svg>
                  </div>
                  <div className=" -translate-x-9 group-hover:-translate-x-0 transition-all duration-[210ms] ease-linear">
                    <h2
                      className={`uppercase group-hover:brightness-150 font-KarlaExtraBold text-lg text-[#fff] group-hover:text-[var(--dynamic-color)] transition-all duration-200 ease-linear max-w-fit px-2`}
                    >
                      {work.name}
                    </h2>
                    <p className="font-KarlaLight uppercase text-xs text-[#fff] ">
                      {work.description}
                    </p>
                    <p className="font-KarlaSemiBold text-xs text-[#fff] tracking-wide">
                      {work.technologies}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      <div className="mt-6 px-2 flex items-center justify-around ">
        <button
          className={`hover:scale-110 hover:bg-white hover:text-[var(--dynamic-color)] transition-all duration-300 px-6 py-2 rounded-full font-light uppercase bg-[var(--dynamic-color)] text-white`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Stay in contact!
        </button>
        <button
          className="hover:scale-110 hover:bg-white hover:text-[var(--dynamic-color)] transition-all duration-300 px-6 py-2 rounded-full font-light uppercase bg-[var(--dynamic-color)] text-white"
          // onMouseEnter={() => setHovered(true)}
          // onMouseLeave={() => setHovered(false)}
        >
          Get resume
        </button>
      </div>
    </div>
  );
};
