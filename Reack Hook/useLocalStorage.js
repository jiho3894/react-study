import { useState } from "react";
import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const App = () => {
  let name = "localNumber";
  const [currentLS, setLS] = useLocalStorage(name, "");
  return (
    <>
      <h1>UseLocalStorage</h1>
      <h3>Current Value: {currentLS}</h3>
      <button onClick={() => setLS("12345")}>Set value: 12345</button>
      <button onClick={() => setLS(null)}>Clear LS</button>
    </>
  );
};

export default App;
