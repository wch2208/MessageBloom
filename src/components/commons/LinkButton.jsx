import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.scss';

const LinkButton = ({ to, buttonText }) => {
  return (
    <div className='link-button'>
      <Link to={to}>
        <button className='link-button__button'>{buttonText}</button>
      </Link>
    </div>
  );
};

export default LinkButton;
