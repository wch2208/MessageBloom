import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/header/Header.scss';
import { PiFlowerDuotone } from 'react-icons/pi';

const Header = () => {
  const location = useLocation();

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

      {(location.pathname === '/' || location.pathname === '/list') && (
        <div className='post-button'>
          <Link to='/post' className='post-btn'>
            롤링 페이지 만들기
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
