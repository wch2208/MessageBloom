import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { PiFlowerDuotone } from 'react-icons/pi';
import flowericon from '../../assets/logo/ic_flower_RemoveBg.svg';
import writeicon from '../../assets/logo/ic_flower_WithLetter.svg';

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`header ${
        isMobile && location.pathname !== '/' && location.pathname !== '/list' ? 'hidden' : ''
      }`}>
      <div className='left'>
        <Link to='/' aria-label='홈으로 이동'>
          <picture className='logo'>
            <img src={writeicon} alt='로고 아이콘' className='ic_flower' />
            {/*<PiFlowerDuotone />*/}
            {/*<span className='logo-text'>MessageBloom</span>*/}
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
