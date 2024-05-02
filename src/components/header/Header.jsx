import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/header/Header.scss';
import { PiFlowerDuotone } from 'react-icons/pi';

const Header = () => {
  return (
    <header className='header'>
      <div className='left'>
        <Link to='/' aria-label='홈으로 이동'>
          <picture className='logo'>
            <PiFlowerDuotone />
            <span className='logo-text'>Rolling</span>
          </picture>
        </Link>
      </div>
      <div className='post-button'>
        {(location.pathname === '/' || location.pathname === '/list') && (
          <button to='/post' className='post-btn'>
            롤링 페이지 만들기
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
