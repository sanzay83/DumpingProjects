import React from "react";
import { useSelector } from "react-redux";

function DisplayCounter() {
  const counterObj = useSelector((store) => store.counter);
  const counter = counterObj.counterVal;
  return (
    <div>
      <p className="lead mb-4">Counter Current Value: {counter}</p>
    </div>
  );
}

export default DisplayCounter;
