import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //usseEffect hook ta 2 ta paramitar nay
  // useEffect(function, [dipendency])

  const [count, setCount] = useState(0);

  useEffect(() => {
    // alert("Alarting");
  }, []);

  useEffect(() => {
    // alert("count state was change");
  }, [count]);

  const updateCounter = () => {
    const newNumber = count + 1;
    setCount(newNumber);
  };

  return (
    <div>
      <h1>Step:{count} </h1>
      <button
        onClick={updateCounter}
        className="border-2 border-solid border-gray-400 px-8 py-3 rounded-2xl font-bold"
      >
        Step
      </button>
    </div>
  );
};

export default UseEffect;
