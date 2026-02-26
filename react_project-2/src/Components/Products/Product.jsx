import React from "react";

const Product = () => {
  // const Product = (props) => {
  //  console.log(props.arrays); this is arry cll
  // **************
  // const Product = (props) => {//
  // console.log(props.products); this is object cll

  return (
    <div>
      {/* props use kore {object} er daynamic data niye display korar niyom
      
      <h1>Product Name:{props.products.name}</h1>
      <h1>Product Price:{props.products.price}</h1> */}

      {/* props use kore [array] er daynamic data display korar nitom  */}

      {/* <h1>Name : {props.arrays[0]}</h1>
      <h1>Name : {props.arrays[1]}</h1>
      <h1>Name : {props.arrays[2]}</h1>
      <h1>Name : {props.arrays[3]}</h1> */}

      {/* map loop use kore data pass to other component 
      ??** dynamic data pass korte chayle {} karli basis dite hoi*/}
    </div>
  );
};

export default Product;
