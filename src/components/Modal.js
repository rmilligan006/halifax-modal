import React from "react";
import favCity from "../components/assets/waterfront.jpeg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img src={favCity} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p>Hey Look</p>
            <h1>It's Halifax</h1>
            <p>....yay.....</p>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>, I love Halifax
            </button>
            <button className="btnOutline">
              <span className="bold">NO</span>, thanks, I love Moncton
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
