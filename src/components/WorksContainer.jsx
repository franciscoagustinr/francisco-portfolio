import React from "react";
import { Works } from "../utilities/Works";
import { useMousePosition } from "../utilities/mousePosition";

export const WorksContainer = () => {
  const mousePosition = useMousePosition();

  return (
    <>
      {Works &&
        Works.map((work) => {
          const rotateClass = work.id % 2 === 0 ? "-rotate-12" : "rotate-12";
          return (
            <div key={work.id} className="group relative mt-4">
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group z-50"
              >
                <div
                  style={{
                    position: "absolute",
                    // left: (mousePosition.x / Math.PI) * 0.4,
                    right: -mousePosition.x / Math.PI + 380,
                    top: mousePosition.y * -0.1,
                  }}
                >
                  <img
                    src={work.imageURL}
                    alt={work.name}
                    className={`relative w-[250px] max-h-[200px] object-cover scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 z-50 border border-[#FAFAFA] ${rotateClass}`}
                  />
                </div>

                <div className="flex flex-row no-wrap justify-start items-center gap-2 p-2 text-left border-b border-[#292929] bg-left-bottom bg-gradient-to-r from-[#FAFAFA] to-[#FAFAFA] bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all ease-in-out duration-200">
                  <div className="p-2 rounded-full opacity-0 group-hover:opacity-100 ">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-3.5 -translate-x-2 group-hover:translate-x-0 origin-top-left group-hover:rotate-0 rotate-45 transition-all duration-200"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0855 5.5714L14 6.49971L13.0858 7.42892L7.60055 13L6.68634 12.0714L11.5902 7.09018H1.29288H0.646521H0V-5.45053e-05H1.29288V5.77693H11.4595L6.68636 0.928618L7.60057 0L13.0855 5.5714Z"
                        fill="#63D2FF"
                      />
                    </svg>
                  </div>
                  <div className=" -translate-x-9 group-hover:-translate-x-0 transition-all duration-200 ease-linear">
                    <h2 className="font-Karla text-lg text-[#6D696A] group-hover:text-[#63D2FF] z-50 transition-all duration-200 ease-linear">
                      {work.name}
                    </h2>
                    <p className="font-KarlaLight uppercase text-xs text-[#8E8E8F]">
                      {work.description}
                    </p>
                    <p className="font-Karla font-bold text-xs text-[#8E8E8F] tracking-wide">
                      {work.technologies}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
    </>
  );
};
