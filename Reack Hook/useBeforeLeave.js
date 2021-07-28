const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("please don`t leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};