import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import writeicon from '../../assets/logo/ic_flower_WithLetter.svg';

export default function Header() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`header ${
        isMobile &&
        location.pathname !== '/' &&
        location.pathname !== '/list' &&
        location.pathname !== '/post'
          ? 'header--hidden'
          : ''
      }`}>
      <div className='header-container'>
        <div className='header__left'>
          <Link to='/' aria-label='홈으로 이동'>
            <picture className='header__logo'>
              <img src={writeicon} alt='로고 아이콘' className='header__logo-icon' />
            </picture>
          </Link>
        </div>

        {(location.pathname === '/' || location.pathname === '/list') && (
          <div className='header__post-button'>
            <Link to='/post' className='header__post-btn'>
              롤링 페이지 만들기
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
