import React, { useState, useLayoutEffect } from "react";

const Modal = ({ onClose }) => {
  // Call hook to lock body scroll
  useLockScroll();
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal"></div>
    </div>
  );
};
// Hook
const useLockScroll = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
};

const App = () => {
  // State for our modal
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h1>UseLockScroll</h1>
      <button onClick={() => setModalOpen(true)}>Lock scroll</button>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
      <button onClick={() => setModalOpen(false)}>Unlock Scroll</button>
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
};
export default App;
