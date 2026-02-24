import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import DaynamicProps from "./components/DaynamicProps/DaynamicProps";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navigation />
        <Home />
        <DaynamicProps
          name="Tanbin Akter"
          department="Computer Science"
          CGPA="3.50"
          age="22"
        />
        <DaynamicProps
          name="Rahat Hossain"
          department="Electrical Engineering"
          CGPA="3.75"
          age="22"
        />
        <DaynamicProps
          name="Sadia Akter"
          department="Mechanical Engineering"
          CGPA="3.25"
          age="22"
        />
        <DaynamicProps
          name="Nusrat Jahan"
          department="Civil Engineering"
          CGPA="3.60"
          age="22"
        />
      </div>
    </>
  );
}

export default App;
