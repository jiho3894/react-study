import { useEffect, useState } from "react";
import React from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    window.removeEventListener("online", handleChange);
    window.removeEventListener("offline", handleChange);
  }, []);
  return status;
};

const App = () => {
  const onLine = useNetwork();
  return (
    <>
      <h1>UseOnline</h1>
      <h2>Are We Online? {onLine ? "Yes!" : "No!"}</h2>
    </>
  );
};

export default App;
