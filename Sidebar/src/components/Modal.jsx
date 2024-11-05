import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./AppContext";
const Modal = () => {
  const { showModal, handleCloseModal } = useGlobalContext();
  return (
    <div className={showModal ? "modal-overlay showModal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={handleCloseModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
