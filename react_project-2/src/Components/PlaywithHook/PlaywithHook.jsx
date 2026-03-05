import React, { useEffect, useState } from "react";
import { Product } from "../product/Product";

const PlaywithHook = () => {
  const [products, setproducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <div>
      {products.map((sinproduct) => (
        <Product key={sinproduct.id} sinproduct={sinproduct} />
      ))}
    </div>
  );
};

export default PlaywithHook;
