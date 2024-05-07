import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.scss';

const LinkButton = ({ to, buttonText, fullWidth, onClick, disabled }) => {
  const disabledClass = `${disabled ? `link-button--disabled` : ''}`;
  const fullWidthClass = `${fullWidth ? 'full-width' : ''}`;

  const buttonClasses = ['link-button__button', fullWidthClass, disabledClass]
    .filter(Boolean)
    .join(' ');

  return (
    <div className='link-button'>
      <Link to={disabled ? '#' : to}>
        <button className={buttonClasses} onClick={disabled ? (e) => e.preventDefault() : onClick}>
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default LinkButton;
