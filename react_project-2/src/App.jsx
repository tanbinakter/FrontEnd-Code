import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Components/Products/Product";

function App() {
  // eta ekta object{}.object k recive korar niyom
  // const products = {
  //   name: "Nokia",
  //   price: 1200,

  // arry k recive kore data display korar niyom
  // const arrays = ["Tanbin", "Shibli", "Sabiha", "Arif"];

  return (
    <div>
      <Product />

      {/* <Product products={products} /> */}
      {/* <Product arrays={arrays} /> */}
    </div>
  );
}

export default App;
