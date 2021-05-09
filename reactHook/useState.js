const App = () => {
  const [item, isItem] = useState(0);

  const increament = () => isItem(item + 1);
  const decreament = () => isItem(item - 1);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increament}>증가</button>
      <button onClick={decreament}>감소</button>
    </div>
  );
};

