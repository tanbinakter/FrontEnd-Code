import React from "react";

const DaynamicProps = (props) => {
  return (
    <div className="border-4 border-solid border-black bg-pink-600 px-5 py-2- m-5 w-60 h-60 float-right">
      <h1 className="text-xl font-bold p-5 ">User Data</h1>
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>CGPA: {props.CGPA}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default DaynamicProps;
