import React from 'react';
import '../../styles/List/ArrowButton.scss';

export default function ArrowButton({ btnType, children }) {
  return <button className={`arrow-button ${btnType}`}>{children}</button>;
}
