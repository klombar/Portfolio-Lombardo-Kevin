import React from "react";
import "./Modal.css"; // Assure-toi d'avoir des styles adaptés

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">
          {children} {/* Affiche le contenu passé en tant que children */}
        </div>
      </div>
    </div>
  );
}

export default Modal;