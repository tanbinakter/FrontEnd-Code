import React from "react";

const SingleFakeData = ({ singleData }) => {
  const { id, name, phone, email, profession } = singleData;
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Phone nmbr:{phone}</h1>
      <h1>email:{email}</h1>
      <h1>Profession:{profession}</h1>
    </div>
  );
};

export default SingleFakeData;
