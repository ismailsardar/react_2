import React, { useState } from "react";

const StateObj = () => {
  const [data, setData] = useState({ name: "Ismile", age: 23 });
  console.log(data);
  return (
    <>
      <h1>State with Object</h1>
      {/* <input type="text" placeholder='name..' value={data.name} onChange={(e)=>setData({name:e.target.value})} />
      <input type="text" placeholder='age..' value={data.age} 
      onChange={(e)=>setData({age:e.target.value})} /> */}

      <input
        type="text"
        placeholder="name.."
        value={data.name}
        onChange={(e) => setData({...data ,name: e.target.value })}
      />
      <input
        type="text"
        placeholder="age.."
        value={data.age}
        onChange={(e) => setData({...data ,age: e.target.value })}
      />

      <h3>Name : {data.name}</h3>
      <h3>Age : {data.age}</h3>
    </>
  );
};

export default StateObj;
