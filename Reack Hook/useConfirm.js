const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") {
    return;
  }
  if (typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    }
    try {
      onCancel();
    } catch (error) {
      return;
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("delete complete");
  const abort = () => console.log("retry");
  const confirmDelete = useConfirm("real?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={ confirmDelete }>Delete the world</button>
    </div>
  );
};
