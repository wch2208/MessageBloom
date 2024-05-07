import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import writeicon from '../../assets/logo/ic_flower_WithLetter.svg';
import LetterAnimation from '../Animation/LetterAnimation';

export default function Header() {
  const location = useLocation();

  const [animationOn, setAnimationOn] = useState(false);

  const toggleAnimation = () => {
    setAnimationOn(!animationOn);
  };

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

        <div className='toggle-container'>
          <button
            className={`toggle-button ${animationOn ? 'on' : 'off'}`}
            onClick={toggleAnimation}>
            {animationOn ? '편지왔어요!' : '편지왔어요?'}
          </button>
          {animationOn && <LetterAnimation />}
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
