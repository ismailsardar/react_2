import React, { useState } from "react";

let clearTime = undefined;
const Watch = () => {
  const [time, setTime] = useState(0);
  const [disable, setDisable] = useState(false);

  const startTime = () => {
    clearTime = setInterval(() => {
      setTime((pre) => pre + 1);
    }, 1000);
    setDisable(true);
  };
  const stopTime = () => {
    clearInterval(clearTime);
    setDisable(false);
  };
  const resetTime = () => {
    clearInterval(clearTime);
    setTime(0);
    setDisable(false);
  };

  return (
    <>
      <h1>{time}</h1>
      <button className="startWatch" disabled={disable} onClick={startTime}>
        Start
      </button>
      <button className="stopWatch" onClick={stopTime}>
        Stop
      </button>
      <button className="resetWatch" onClick={resetTime}>
        Reset
      </button>
    </>
  );
};

export default Watch;
