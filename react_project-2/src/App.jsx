import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AllCompo from "./Components/AllComponent/AllCompo";
import Addtocard from "./Components/AddtoCard/Addtocard";
import PlaywithHook from "./Components/PlaywithHook/PlaywithHook";

function App() {
  return (
    <div>
      <PlaywithHook />
      {/* <Addtocard /> */}
      {/* <AllCompo /> output dekhte hoile eyta commentout kro*/}
    </div>
  );
}

export default App;
