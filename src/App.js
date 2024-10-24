import { useState } from "react";
import { DialogBox } from "./components/dialog-box";
import { Marquee } from "./components/marquee-freelance";
import { RRSS } from "./components/RRSS";
import { Scene } from "./components/Scene";

function App() {
  const [dialogText, setDialogText] = useState(null);

  return (
    <div className="h-screen">
      <Marquee />
      <Scene />
      <RRSS setDialogText={setDialogText} />
      {dialogText && <DialogBox text={dialogText} />}
    </div>
  );
}

export default App;
