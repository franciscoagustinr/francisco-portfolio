import React, { useEffect } from 'react';
import FranciscoPhoto from '../assets/francisco-photo.png';
import FranciscoFunPhoto from '../assets/francisco-fun-photo.png';
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
            "Know more about me! <span class='text-2xl inline-block animate-bounce'>😄</span>"
          )
        }
        onMouseLeave={() => setDialogText('')}
      >
        <img
          src={FranciscoPhoto}
          alt="Francisco"
          className={`opacity-1 relative -top-3 !w-28 select-none transition-all duration-300 ease-in-out group-hover:opacity-0 4xl:top-12 4xl:!w-[19rem] ${isMusicPlaying && 'animate-shake'}`}
        />
        <img
          src={FranciscoFunPhoto}
          alt="Francisco"
          className={`relative -top-[5.5rem] left-2 !w-24 select-none opacity-0 transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:opacity-100 group-active:scale-[1.2] md:-top-[5.5rem] md:left-2 lg:-top-[7rem] 4xl:-top-[15rem] 4xl:left-8 4xl:!w-72`}
        />
      </div>
    </div>
  );
};
