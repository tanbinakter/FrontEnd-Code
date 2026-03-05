import React, { useEffect, useState } from "react";
import SingleFakeData from "../SingleFakeData/SingleFakeData";

const Addtocard = () => {
  const [fakeData, setfakeData] = useState([]);
  // console.log(fakeData);

  useEffect(() => {
    fetch("fakeData.json") //ey line ta commetnt out kore out put dekhte hobe ey file ta onno jaygay use koresi ty eta cmnt use koresi playwithHokk file e
      .then((res) => res.json())
      .then((data) => setfakeData(data));
  }, []);

  return (
    <div>
      <h1>fake data length:{fakeData.length}</h1>
      {fakeData.map((singleData) => (
        <SingleFakeData key={singleData.id} singleData={singleData} />
      ))}
    </div>
  );
};

export default Addtocard;
