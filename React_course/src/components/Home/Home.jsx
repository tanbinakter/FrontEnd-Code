import React from "react";

const Home = () => {
  // ekhane javascript code likhte hoi...

  function update() {
    const nextComponent = document.getElementById("compoN");
    nextComponent.innerText = " Hurry this Event is working";
  }

  // this is summition number function
  function sumition(sum) {
    console.log(sum * 2);
  }

  return (
    <div>
      <h1 id="compoN" className="bg-green-900 text-white p-5 m-5 font-bold">
        Hurrey we larn Event
      </h1>

      <button
        onClick={update}
        className="bg-red-700 text-white px-5 py-2 rounded-lg"
      >
        Click Me
      </button>
      {/* create e sum number...*/}
      <h1 className="bg-green-900 text-white p-5 m-5 font-bold">
        This is cll summition number
      </h1>

      <button
        onClick={() => sumition(5)}
        className="bg-green-900 text-white px-5 py-2 rounded-lg m-10"
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
