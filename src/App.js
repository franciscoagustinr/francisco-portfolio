import { useEffect, useState } from "react";
import { DialogBox } from "./components/dialog-box";
import { Marquee } from "./components/marquee-freelance";
import { RRSS } from "./components/RRSS";
import { Scene } from "./components/Canvas/Scene";
import WeatherData from "./components/Weather";
import { About } from "./components/about";
import { HandwrittenTexts } from "./components/Text-Handwritten";
import { PopUpAbout } from "./components/About/PopUpAbout";
import gsap from "gsap";
import { useHatBackground } from "./hooks/useBackground";
import { useHatStore } from "./stores/useHatStore";

function App() {
  const [dialogText, setDialogText] = useState(null);
  // const [hatName, setHatName] = useState('NoneHat');
  const { getGradientBackground } = useHatBackground();
  const { hatName } = useHatStore();

  useEffect(() => {
    gsap.to(".main-container", {
      background: getGradientBackground(hatName), // Función que devuelve el color o gradiente según `hatName`
      duration: 1,
      // ease: "power2.inOut",
      ease: "power4.in",
    });
  }, [getGradientBackground, hatName]);

  return (
    // <div className="h-screen bg-[rgb(53,190,214)]">
    <div className={`main-container h-screen`}>
      <Marquee />
      <About setDialogText={setDialogText} />
      <PopUpAbout hatName={hatName} />
      <HandwrittenTexts />
      <Scene />
      <RRSS setDialogText={setDialogText} />
      <WeatherData setDialogText={setDialogText} hatName={hatName} />
      {dialogText && <DialogBox text={dialogText} />}

    </div >
  );
}

export default App;
