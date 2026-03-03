import React, { useEffect, useState } from "react";
import Singleuserdata from "../Singleuserdata/Singleuserdata";

const Api = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div>
      <h1 className="bg-black font-bold w-100 h-15 text-white pt-5 rounded-2xl">
        Hellw we are learn Api with useEffect
      </h1>
      <h1>Data: {allData.length}</h1>
      {allData.map((singleData) => (
        <Singleuserdata key={singleData.id} singleData={singleData} />
      ))}
    </div>
  );
};

export default Api;
