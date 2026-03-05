import React from "react";

export const Product = ({ sinproduct }) => {
  const { id, name, phone, email, profession } = sinproduct;

  return (
    <div className="border-2 border-black">
      <p> Name:{name}</p>
      <h1> Id:{id}</h1>
      <span> profession:{profession}</span>
    </div>
  );
};
