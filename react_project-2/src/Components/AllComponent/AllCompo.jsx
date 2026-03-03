import Conditional from "../ConditionalCompo/Conditional";
import Product from "../Products/Product";

import Api from "../UseEffect/Api";
import UseEffect from "../UseEffect/UseEffect";
import UseState from "../UseStateHook/UseState";

const AllCompo = () => {
  // eta ekta object{}.object k recive korar niyom
  // const products = {
  //   name: "Nokia",
  //   price: 1200,

  // arry k recive kore data display korar niyom
  // const arrays = ["Tanbin", "Shibli", "Sabiha", "Arif"];

  return (
    <div>
      <Api />

      <Conditional />
      <UseState />
      <UseEffect />

      <Product />

      {/* <Product products={products} /> */}
      {/* <Product arrays={arrays} /> */}
      {/* map loop diye dynamic data pass to other component ....dynamic datar jonne{} use kora hoi */}
    </div>
  );
};

export default AllCompo;
