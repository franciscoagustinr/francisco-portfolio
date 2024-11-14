import { useEffect, useState } from "react";
import { DialogBox } from "./components/dialog-box";
import { Marquee } from "./components/marquee-freelance";
import { RRSS } from "./components/RRSS";
import { Scene } from "./components/Scene";
import WeatherData from "./components/Weather";
import { Coffee } from "./components/coffee";
import { About } from "./components/about";
import { HandwrittenTexts } from "./components/Text-Handwritten";
import { PopUpAbout } from "./components/PopUpAbout";
import gsap from "gsap";

function App() {
  const [dialogText, setDialogText] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [hatName, setHatName] = useState('NoneHat');


  useEffect(() => {
    gsap.to(".main-container", {
      background: getHatBackground(hatName), // Función que devuelve el color o gradiente según `hatName`
      duration: 1,
      // ease: "power2.inOut",
      ease: "power4.in",
    });
  }, [hatName]);

  const getHatBackground = (hatName) => {
    switch (hatName) {
      case 'NoneHat':
        return "linear-gradient(to bottom right, rgb(53, 190, 214), rgb(53, 190, 214))";
      case 'OktopusHat':
        return "linear-gradient(to bottom right, #ee43be, #9e2ba8)";
      case 'BatmanHat':
        return "linear-gradient(to bottom, #1d2167, #0f0f0f)";
      case 'ChineseHat':
        return "linear-gradient(to bottom right, #b99c70, #8a7345)";
      case 'MickeyHat':
        return "linear-gradient(to bottom, #bed95f, #f2ba52)";
      case 'CowboyHat':
        return "linear-gradient(to bottom right, #f6bc4e, #f2a65e)";
      case 'SharkHat':
        return "linear-gradient(to bottom left, #047692, #0476ff)";
      default:
        return "rgb(53, 190, 214)";
    }

  }

  return (
    // <div className="h-screen bg-[rgb(53,190,214)]">
    <div className={`main-container h-screen  `}>
      <Marquee />
      <About setDialogText={setDialogText} setIsPopUpOpen={setIsPopUpOpen} isPopUpOpen={isPopUpOpen} />
      <PopUpAbout setIsPopUpOpen={setIsPopUpOpen} isPopUpOpen={isPopUpOpen} />
      <HandwrittenTexts />
      <Scene isPopUpOpen={isPopUpOpen} onHatChange={setHatName} />
      <RRSS setDialogText={setDialogText} />
      <Coffee setDialogText={setDialogText} />
      <WeatherData setDialogText={setDialogText} />
      {dialogText && <DialogBox text={dialogText} />}
    </div >
  );
}

export default App;
