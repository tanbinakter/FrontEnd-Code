import React from "react";

const Product = ({ product }) => {
  const { name, age, profession } = product;

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="border-2 border-red-800 px-12 py-12">
      <h1 className="font-bold text-4xl ">{name}</h1>
      <h2>{profession}</h2>
      <p>{age}</p>
      <button
        onClick={handleClick}
        className="bg-green-400 px-6 py-3 rounded-sm "
      >
        Add To Card
      </button>
    </div>
  );
};

export default Product;
