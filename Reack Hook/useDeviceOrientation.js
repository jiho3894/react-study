import { useEffect, useState } from "react";
import React from "react";

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null
  });

  const handle = (e) => {
    setOrientation({
      beta: e.beta,
      alpha: e.alpha,
      gamma: e.gamma
    });
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handle);
    return () => {
      window.removeEventListener("deviceorientation", handle);
    };
  }, []);
  return orientation;
};

const App = () => {
  const { beta, alpha, gamma } = useDeviceOrientation();
  return (
    <div className="App">
      <h1>useDeviceOrientation</h1>
      <p>{`beta : ${beta}`}</p>
      <p>{`alpha : ${alpha}`}</p>
      <p>{`gamma : ${gamma}`}</p>
    </div>
  );
};

export default App;
