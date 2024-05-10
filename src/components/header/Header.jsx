import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo/ic_flower_RemoveBg.svg';
import LetterAnimation from '../animation/LetterAnimation';
import MouseTracker from '../commons/mouseTracker';

export default function Header() {
  const location = useLocation();

  const [animationOn, setAnimationOn] = useState(false);

  const toggleAnimation = () => {
    setAnimationOn(!animationOn);
  };

  return (
    <header className={`header`}>
      <div className='header-container'>
        <Link to='/' aria-label='홈으로 이동'>
          <MouseTracker>
            <div className='header-container__logo'>
              <picture className='header-container__logo__img-wrap'>
                <img src={logo} alt='로고 아이콘' className='header-container__logo__img' />
              </picture>
              <span className='header-container__logo__title'> Message Bloom</span>
            </div>
          </MouseTracker>
        </Link>

        <div className='header-container__right-side'>
          <div className='toggle-container'>
            <input
              type='checkbox'
              id='switch'
              className='toggle-input'
              onChange={toggleAnimation}
              checked={animationOn}
            />
            <label htmlFor='switch' className='toggle-label'>
              <span className='onf_btn'></span>
            </label>
            {animationOn && <LetterAnimation />}
          </div>

          {(location.pathname === '/' || location.pathname === '/list') && (
            <div className='header-container__post-btn'>
              <Link to='/post' className='header-container__post-btn-text'>
                롤링 페이퍼 만들기
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
