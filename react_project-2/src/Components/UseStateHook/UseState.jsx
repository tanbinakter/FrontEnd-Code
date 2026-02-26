import React, { useState } from "react";

const UseState = () => {
  //useState install kora hoi jate react library theke proyojonio  kaj korte parbo
  const [price, setPrice] = useState(10);
  // veriable[ name, method/function]=useState()
  // javascript code

  const increseHandle = () => {
    const newPrice = price + 1;
    setPrice(newPrice);
  };
  const decreseHandle = () => {
    const newPrice = price - 1;
    setPrice(newPrice);
  };
  return (
    <div>
      <h1>Hurry we larn UseState Hook</h1>
      <h1>Price : {price}</h1>

      <button
        onClick={increseHandle}
        className="border-2 border-solid border-black px-10 py-4  bg-green-900 text-white font-bold rounded-4xl"
      >
        Increce
      </button>

      <button
        onClick={decreseHandle}
        className="border-2 border-solid border-black px-10 py-4 bg-red-800 text-black font-bold rounded-4xl m-5"
      >
        Decrece
      </button>

      <h1>Price :{price}</h1>
      <p> price: {price}</p>
    </div>
  );
};

export default UseState;
