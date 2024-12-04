import React from 'react';
import { Works } from '../../utils/works';
import { useMousePosition } from '../../utils/mousePosition';
import { useHatBackground } from '../../hooks/useBackground';

export const WorksContainer = ({ hatName }) => {
  const mousePosition = useMousePosition();
  const { getHexBackground } = useHatBackground();
  const dynamicColor = getHexBackground(hatName);

  const handleCV = () => {
    window.open('./CV_FranciscoAgustinRodriguez.pdf', '_blank');
  };

  return (
    <div
      style={{
        '--dynamic-color': dynamicColor,
      }}
    >
      {Works &&
        Works.map((work) => {
          const rotateClass = work.id % 2 === 0 ? '-rotate-12' : 'rotate-12';
          return (
            <div
              key={work.id}
              className="group relative mb-0.5 md:mb-1 lg:mb-2"
            >
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group z-50"
              >
                <div className="relative left-[15rem]">
                  <div
                    style={{
                      left:
                        window.innerWidth >= 4000
                          ? (mousePosition.x / Math.PI - 250 * 3.2) / 4
                          : (mousePosition.x / Math.PI - 250) / 4,
                    }}
                    className="absolute"
                  >
                    <img
                      src={work.imageURL}
                      alt={work.name}
                      className={`relative z-50 max-h-[200px] w-[190px] scale-75 border border-[#FAFAFA] object-cover opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 ${rotateClass}`}
                    />
                  </div>
                </div>

                <div className="no-wrap flex flex-row items-center justify-start gap-2 border-b border-[#fff] border-opacity-40 p-2 text-left transition-all duration-300 ease-in-out">
                  <div className="rounded-full p-2 opacity-0 group-hover:opacity-100">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 origin-top-left -translate-x-2 rotate-45 transition-all duration-200 group-hover:translate-x-0 group-hover:rotate-0 group-hover:brightness-150"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0855 5.5714L14 6.49971L13.0858 7.42892L7.60055 13L6.68634 12.0714L11.5902 7.09018H1.29288H0.646521H0V-5.45053e-05H1.29288V5.77693H11.4595L6.68636 0.928618L7.60057 0L13.0855 5.5714Z"
                        // fill="#fff"
                        fill={'var(--dynamic-color)'}
                      />
                    </svg>
                  </div>
                  <div className="-translate-x-9 transition-all duration-[210ms] ease-linear group-hover:-translate-x-0">
                    <h2
                      className={`max-w-fit px-2 pl-0 font-KarlaExtraBold text-base uppercase text-[#fff] transition-all duration-200 ease-linear group-hover:text-[var(--dynamic-color)] group-hover:brightness-150 4xl:text-lg`}
                    >
                      {work.name}
                    </h2>
                    <p className="font-sans text-xs font-light uppercase text-[#fff] 4xl:text-xs">
                      {work.description}
                    </p>
                    <p className="font-sans text-xs font-semibold tracking-wide text-[#fff] 4xl:text-xs">
                      {work.technologies}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      <div className="mt-4 flex items-center justify-around gap-5 px-2 lg:mt-8 lg:gap-0 4xl:mt-5">
        <button
          className={`cursor-contact rounded-full bg-[var(--dynamic-color)] px-6 py-2 font-RecoletaBlack uppercase tracking-wide text-white transition-all duration-200 hover:-rotate-2 hover:scale-125 hover:bg-white hover:text-[var(--dynamic-color)] hover:shadow-lg 4xl:text-lg`}
        >
          <a
            className="cursor-contact"
            href="mailto:rodriguezfranciscoa@hotmail.com?subject=Wanna talk!"
          >
            Let's chat!
          </a>
        </button>
        <button
          onClick={handleCV}
          className="cursor-resume rounded-full bg-[var(--dynamic-color)] px-6 py-2 font-RecoletaBlack uppercase tracking-wide text-white transition-all duration-200 hover:-rotate-2 hover:scale-125 hover:bg-white hover:text-[var(--dynamic-color)] hover:shadow-lg 4xl:text-lg"
        >
          Get resume!
        </button>
      </div>
    </div>
  );
};
