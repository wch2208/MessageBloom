import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import writeicon from '../../assets/logo/ic_flower_WithLetter.svg';

export default function Header() {
  const location = useLocation();

  return (
    <header className={`header`}>
      <div className='header-container'>
        <div className='header-container__leftsid'>
          <Link to='/' aria-label='홈으로 이동'>
            <picture className='header-container__logo'>
              <img src={writeicon} alt='로고 아이콘' className='header-container__logo-icon' />
            </picture>
          </Link>
        </div>

        {(location.pathname === '/' || location.pathname === '/list') && (
          <div className='header-container__post-btn'>
            <Link to='/post' className='header-container__post-btn-text'>
              롤링 페이지 만들기
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
