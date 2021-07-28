import { useEffect, useState } from "react";
import React from "react";

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
};

const App = () => {
  const kPress = useKeyPress("k");
  const iPress = useKeyPress("i");
  const mPress = useKeyPress("m");
  const cPress = useKeyPress("c");
  const hPress = useKeyPress("h");
  return (
    <>
      <h1>UseKeyPress</h1>
      <p>Pressed 'K': {kPress && "K"}</p>
      <p>Pressed 'I': {iPress && "I"}</p>
      <p>Pressed 'M': {mPress && "M"}</p>
      <p>Pressed 'C': {cPress && "C"}</p>
      <p>Pressed 'H': {hPress && "H"}</p>
      <p>Pressed 'I': {iPress && "I"}</p>
    </>
  );
};

export default App;
