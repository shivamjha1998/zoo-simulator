import React from 'react';
import './Main.css';

const ActionButton = ({ text, onClick, className }) => {
  return (
    <button className={`action-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ActionButton;
