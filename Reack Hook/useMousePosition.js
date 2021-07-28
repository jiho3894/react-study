import { useState, useEffect } from "react";
import React from "react";

const useMousePosition = () => {
  let [MousePosition, setMousePosition] = useState({
    x: null,
    y: null
  });

  function handleMouseMove(e) {
    setMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return MousePosition;
};

const App = () => {
  let { x, y } = useMousePosition();
  return (
    <>
      <h1>UseMousePosition</h1>
      <p>Mouse X : {x}</p>
      <p>Mouse Y : {y}</p>
    </>
  );
};

export default App;
