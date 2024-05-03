import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonWithLink.scss';

const ButtonWithLink = ({ to, buttonText }) => {
  return (
    <div className='link-wrapper'>
      <Link to={to} className='button-wrapper'>
        <button className='btnwithlink'>{buttonText}</button>
      </Link>
    </div>
  );
};

export default ButtonWithLink;
