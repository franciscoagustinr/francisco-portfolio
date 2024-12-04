import { useEffect, useRef, useState } from "react";
import { DialogBox } from "./components/dialog-box";
import { Marquee } from "./components/marquee-freelance";
import { RRSS } from "./components/RRSS";
import { Scene } from "./components/Canvas/Scene";
import WeatherData from "./components/Weather";
import { About } from "./components/about";
import { LoadingBar } from "./components/LoadingBar";
import { HandwrittenTexts } from "./components/Text-Handwritten";
import { PopUpAbout } from "./components/About/PopUpAbout";
import gsap from "gsap";
import { useHatBackground } from "./hooks/useBackground";
import { useHatStore } from "./stores/useHatStore";
import { useScrollDetector } from "./hooks/useScrollDetector";
import { useScrollStore } from "./stores/useScroll";
import { usePreloader } from "./stores/usePreloader";
import RotatingText from "./components/RotatingText";
import { usePopupStore } from "./stores/usePopUp";
import { getClickCount } from "./utils/getClickCount";
import { Count } from "./components/count";


function App() {
  const [dialogText, setDialogText] = useState(null);
  const { getGradientBackground } = useHatBackground();
  const { hatName } = useHatStore();
  useScrollDetector();
  const isScrolling = useScrollStore((state) => state.isScrolling);
  const isLoading = usePreloader((state) => state.isLoading);
  const isPopUpOpen = usePopupStore((state) => state.isPopUpOpen);

  useEffect(() => {
    if (!isScrolling || isPopUpOpen) return;
    setDialogText('Nope, everything is here! 🙃')
    setTimeout(() => setDialogText(''), 1800);
  }, [isScrolling, isPopUpOpen])

  useEffect(() => {
    if (isLoading) return;
    gsap.to(".main-container", {
      background: getGradientBackground(hatName),
      duration: 1,
      ease: "power4.in",
    });
  }, [getGradientBackground, hatName, isLoading]);

  useEffect(() => {
    if (isLoading) return;
    gsap.fromTo(
      ".rrss",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
    );
    gsap.fromTo(
      ".handwrittenTexts",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.1 }
    );
    gsap.fromTo(
      ".about",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.5 }
    );
    gsap.fromTo(
      ".weather",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.5 }
    );

  }, [isLoading]);


  useEffect(() => {
    getClickCount();
    console.log("%c❤️ SITE MADE WITH LOVE BY FRANCISCO AGUSTIN ❤️", "background-color: #047692; color: white; padding: 20px;");
  }, [])

  return (
    <div className={`main-container h-screen ${isLoading && 'bg-[#101720]'}`}>
      <Scene setDialogText={setDialogText} />
      {isLoading && (
        <>
          <div className="w-full inset-0 absolute flex items-center justify-center">
            <LoadingBar />
            <RotatingText />
          </div>
        </>
      )}

      {!isLoading && (
        <>
          <Marquee />
          <div className="handwrittenTexts absolute z-50 top-0 w-full">
            <HandwrittenTexts />
          </div>
          <PopUpAbout hatName={hatName} />
          <div className="about absolute lg:top-6 top-4 lg:left-2 -left-4 ">
            <About setDialogText={setDialogText} />
          </div>
          <div className="rrss">
            <RRSS setDialogText={setDialogText} />
          </div>
          <div className="weather absolute lg:right-16 right-3.5 4xl:right-[2%] top-8 4xl:top-40 z-30">
            <WeatherData setDialogText={setDialogText} hatName={hatName} />
          </div>
          <div className="absolute bottom-0 !z-10 w-full pointer-events-none flex items-center justify-center">
            <Count />
          </div>
          {dialogText && <DialogBox text={dialogText} />}
        </>
      )}

    </div >
  );
}

export default App;
