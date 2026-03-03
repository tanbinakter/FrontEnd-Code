import React from "react";
// distractaring altarnative props
const Singleuserdata = ({ singleData }) => {
  // console.log(props.singleData.name);
  // console.log(singleData);
  const { name, phone, website, company } = singleData;

  return (
    <div>
      <h1> Name: {name}</h1>
      <h1> Phone: {phone}</h1>
      <h1> website: {website}</h1>
      <h1> company: {company.name}</h1>
    </div>
  );
};

export default Singleuserdata;
