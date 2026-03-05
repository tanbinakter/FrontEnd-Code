import React from "react";

const Singleuserdata = ({ singleData }) => {
  //props na like {} er modde name dile diatracting korte hobe.
  // console.log(singleData);
  const { name, phone, email, website, company } = singleData;
  return (
    <div>
      <h1>name :{name}</h1>
      <h1>pHONE:{phone}</h1>
      <h1>email :{email}</h1>
      <h1>websitte:{website}</h1>
      <h1>Company:{company.name}</h1>
    </div>
  );
};

export default Singleuserdata;

// import React from "react";
// // distractaring altarnative props

// // const Singleuserdata = ({ singleData }) => {

// // console.log(props.singleData.name);
// // console.log(singleData);
// // const { name, phone, website, company } = singleData;

// const Singleusedata = (props) => {
//   console.log(props.singleData);
//   return (
//     // <div>
//     //   <h1> Name: {name}</h1>
//     //   <h1> Phone: {phone}</h1>
//     //   <h1> website: {website}</h1>
//     //   <h1> company: {company.name}</h1>
//     // </div>
//     <div> hellwq api </div>
//   );
// };

// export default Singleuserdata;
