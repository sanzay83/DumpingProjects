import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ClockComponent() {
  const [timenow, setTimenow] = useState(new Date());

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTimenow(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  return (
    <div>
      {timenow.toLocaleDateString()} {timenow.toLocaleTimeString()}
    </div>
  );
}

export default ClockComponent;
