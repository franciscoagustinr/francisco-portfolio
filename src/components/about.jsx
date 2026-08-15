import React, { useEffect, useState } from 'react';
import FranciscoPhoto from '../assets/images/francisco-photo.png';
import FranciscoFunPhoto from '../assets/images/francisco-fun-photo.png';
import GrinningFace from '../assets/images/grinning-face.png';
import { usePopupStore } from '../stores/usePopUp';
import { useScrollStore } from '../stores/useScroll';
import { applyBounceEffect } from '../utils/applyBounceEffect';
import { useMusicPlaying } from '../stores/useMusicPlaying';

export const About = ({ setDialogText }) => {
  const openPopUp = usePopupStore((state) => state.openPopUp);
  const isScrolling = useScrollStore((state) => state.isScrolling);
  const isMusicPlaying = useMusicPlaying((state) => state.isMusicPlaying);
  const isPopUpOpen = usePopupStore((state) => state.isPopUpOpen);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    applyBounceEffect('.picture-container', isScrolling, isPopUpOpen);
  }, [isScrolling, isPopUpOpen]);

  const showHoverState = () => {
    setIsHovered(true);
    setDialogText(
      `Know more about me! <img loading="eager" src=${GrinningFace} class='inline-block w-6 animate-bounce'/>`
    );
  };

  const hideHoverState = () => {
    setIsHovered(false);
    setDialogText('');
  };

  const handleClick = () => {
    showHoverState(); // dispara la animación en el mismo toque
    openPopUp();
  };

  return (
    <div
      className="picture-container z-30 max-h-20 cursor-pointer"
      onClick={handleClick}
      onMouseEnter={showHoverState}
      onMouseLeave={hideHoverState}
    >
      <div className="relative max-h-20 transition-all duration-200">
        <img
          src={FranciscoPhoto}
          alt="Francisco"
          className={`opacity-1 relative -top-3 !w-28 select-none transition-all duration-300 ease-in-out 3xl:left-0 3xl:!w-44 4xl:top-2 4xl:!w-[22rem] ${
            isHovered ? 'opacity-0' : ''
          } ${isMusicPlaying && 'animate-shakeTwo'}`}
        />
        <img
          src={FranciscoFunPhoto}
          alt="Francisco"
          className={`relative -top-[6.5rem] left-3 !w-20 select-none opacity-0 transition-all duration-300 ease-in-out active:scale-[1.2] lg:-top-[7rem] lg:!w-24 3xl:-top-[11.5rem] 3xl:!w-40 4xl:-top-[19rem] 4xl:left-8 4xl:!w-72 ${
            isHovered ? 'scale-150 opacity-100 3xl:scale-125 4xl:scale-150' : ''
          }`}
        />
      </div>
    </div>
  );
};
