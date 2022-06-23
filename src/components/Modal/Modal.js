import React from "react";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="Modal-overlay">
      <h1 className="Modal-header">Invalid input!</h1>
      <div className="Modal-body">
        <p className="Modal-text">{props.error}</p>
        <button onClick={props.onButton} className="Modal-button">
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
