import React from 'react';
import './DialogStyle.css';

function Dialog ({ title, content, onClose }) {
  return (
    <div className="dialog">
      <div className="dialog-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Dialog;
