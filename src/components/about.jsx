import React, { useEffect } from 'react';
import FranciscoPhoto from '../assets/images/francisco-photo.png';
import FranciscoFunPhoto from '../assets/images/francisco-fun-photo.png';
import { usePopupStore } from '../stores/usePopUp';
import { useScrollStore } from '../stores/useScroll';
import { applyBounceEffect } from '../utils/applyBounceEffect';
import { useMusicPlaying } from '../stores/useMusicPlaying';

export const About = ({ setDialogText }) => {
  const openPopUp = usePopupStore((state) => state.openPopUp);
  const isScrolling = useScrollStore((state) => state.isScrolling);
  const isMusicPlaying = useMusicPlaying((state) => state.isMusicPlaying);

  useEffect(() => {
    applyBounceEffect('.picture-container', isScrolling);
  }, [isScrolling]);

  return (
    <div
      className="picture-container z-30 max-h-20 cursor-pointer"
      onClick={openPopUp}
    >
      <div
        className={`group relative max-h-20 transition-all duration-200`}
        onMouseEnter={() =>
          setDialogText(
            "Know more about me! <img src='../assets/images/grinning-face.png' class='inline-block w-6 animate-bounce'/>"
          )
        }
        onMouseLeave={() => setDialogText('')}
      >
        <img
          src={FranciscoPhoto}
          alt="Francisco"
          className={`opacity-1 relative -top-3 !w-28 select-none transition-all duration-300 ease-in-out group-hover:opacity-0 3xl:left-0 3xl:!w-44 4xl:top-2 4xl:!w-[22rem] ${isMusicPlaying && 'animate-shakeTwo'}`}
        />
        <img
          src={FranciscoFunPhoto}
          alt="Francisco"
          className={`relative -top-[6.5rem] left-3 !w-20 select-none opacity-0 transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:opacity-100 group-active:scale-[1.2] lg:-top-[7rem] lg:!w-24 3xl:-top-[11.5rem] 3xl:!w-40 3xl:group-hover:scale-125 4xl:-top-[19rem] 4xl:left-8 4xl:!w-72 4xl:group-hover:scale-150`}
        />
      </div>
    </div>
  );
};
