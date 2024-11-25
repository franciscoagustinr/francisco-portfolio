import { useEffect, useState } from "react";
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

function App() {
  const [dialogText, setDialogText] = useState(null);
  const { getGradientBackground } = useHatBackground();
  const { hatName } = useHatStore();
  useScrollDetector();
  const isScrolling = useScrollStore((state) => state.isScrolling);
  const isLoading = usePreloader((state) => state.isLoading);

  useEffect(() => {
    if (!isScrolling) return;
    setDialogText('Nope, everything is here! 🙃')
    setTimeout(() => setDialogText(''), 1800);
  }, [isScrolling])

  useEffect(() => {
    if (isLoading) return;
    gsap.to(".main-container", {
      background: getGradientBackground(hatName),
      duration: 1,
      ease: "power4.in",
    });
  }, [getGradientBackground, hatName, isLoading]);

  return (
    <div className={`main-container h-screen ${isLoading && 'bg-[#0C0C0C]'}`}>
      <Scene />
      {isLoading && (
        <>
          <LoadingBar />
          <RotatingText />
        </>
      )}

      {!isLoading && (
        <>
          <Marquee />
          <About setDialogText={setDialogText} />
          <PopUpAbout hatName={hatName} />
          <HandwrittenTexts />
          <RRSS setDialogText={setDialogText} />
          <WeatherData setDialogText={setDialogText} hatName={hatName} />
          {dialogText && <DialogBox text={dialogText} />}
        </>
      )}

    </div >
  );
}

export default App;
