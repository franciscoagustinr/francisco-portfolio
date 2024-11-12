import { useState } from "react";
import { DialogBox } from "./components/dialog-box";
import { Marquee } from "./components/marquee-freelance";
import { RRSS } from "./components/RRSS";
import { Scene } from "./components/Scene";
import WeatherData from "./components/Weather";
import { Coffee } from "./components/coffee";
import { About } from "./components/about";
import { HandwrittenTexts } from "./components/Handwritten-texts";
import { PopUpAbout } from "./components/PopUpAbout";

function App() {
  const [dialogText, setDialogText] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <div className="h-screen bg-[rgb(53,190,214)]">
      <Marquee />
      <About setDialogText={setDialogText} setIsPopUpOpen={setIsPopUpOpen} isPopUpOpen={isPopUpOpen} />
      <PopUpAbout setIsPopUpOpen={setIsPopUpOpen} isPopUpOpen={isPopUpOpen} />
      <HandwrittenTexts />
      <Scene isPopUpOpen={isPopUpOpen} />
      <RRSS setDialogText={setDialogText} />
      <Coffee setDialogText={setDialogText} />
      <WeatherData setDialogText={setDialogText} />
      {dialogText && <DialogBox text={dialogText} />}
    </div >
  );
}

export default App;
