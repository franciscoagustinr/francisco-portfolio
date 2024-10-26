import { useState } from "react";
import { DialogBox } from "./components/dialog-box";
import { Marquee } from "./components/marquee-freelance";
import { RRSS } from "./components/RRSS";
import { Scene } from "./components/Scene";
import WeatherData from "./components/Weather";
import { Coffee } from "./components/coffee";

function App() {
  const [dialogText, setDialogText] = useState(null);

  return (
    <div className="h-screen bg-[rgb(53,190,214)]">
      <Marquee />
      <Scene />
      <RRSS setDialogText={setDialogText} />
      <Coffee setDialogText={setDialogText} />
      {dialogText && <DialogBox text={dialogText} />}
      <WeatherData setDialogText={setDialogText} />
    </div>
  );
}

export default App;
