import React from 'react';
import '../../styles/List/ArrowButton.scss';

export default function ArrowButton({ btnType, onClick, children }) {
  return (
    <button className={`arrow-button ${btnType}`} onClick={onClick}>
      {children}
    </button>
  );
}
