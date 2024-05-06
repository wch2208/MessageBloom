import React, { useState, useEffect } from 'react';
import './HeaderPost.scss';
import CountPerson from './components/CountPerson.jsx';
import Emojis from './components/DropDownEmojis.jsx';
import Toast from './components/PostToast.jsx';
import shareicon20 from '../../assets/icon/ic_share_20.svg';
import shareicon24 from '../../assets/icon/ic_share_24.svg';
import rectangle from '../../assets/icon/ic_rectangle.svg';

export default function HeaderPost() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const fakeTo = { id: 123, name: '6팀 화이팅!!' };

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleShareOptionClick(option) {
    console.log('Selected option:', option);
    setToastMessage(`${option}이 복사되었습니다.`);
    setShowToast(true);
    setDropdownOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shareicon = windowWidth >= 767 ? shareicon24 : shareicon20;

  return (
    <div className='headerPost'>
      <div className='headerPost__container'>
        <div className='headerPost__toname'>To. {fakeTo.name}</div>
        <div className='headerPost__info-wrapper'>
          {windowWidth >= 1200 && (
            <>
              <div className='headerPost__person-wrapper'>
                <CountPerson />
              </div>
              <img className='headerPost__rectangle1' src={rectangle} alt='가림막' />
            </>
          )}

          <div className='headerPost__emoji-Share-Control'>
            <div className='headerPost__emoji-Control'>
              <Emojis />
            </div>
            <img className='headerPost__rectangle2' src={rectangle} alt='가림막' />
            <div className='headerPost__Share-Control'>
              <div className='headerPost__Share-dropdown'>
                <button
                  className='headerPost__share-btn'
                  onClick={toggleDropdown}
                  style={{ cursor: 'pointer' }}>
                  <img src={shareicon} alt='페이지공유' />
                </button>
                {dropdownOpen && (
                  <ul className='headerPost__share-dropdown-menu'>
                    <li
                      className='headerPost__dropdown-menu-item'
                      onClick={() => handleShareOptionClick('KakaoTalk')}
                      style={{ cursor: 'pointer' }}>
                      카카오톡 공유
                    </li>

                    <li
                      className='headerPost__dropdown-menu-item'
                      onClick={() => handleShareOptionClick('URL')}
                      style={{ cursor: 'pointer' }}>
                      URL 공유
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {dropdownOpen || (showToast && <Toast message={toastMessage} />)}
    </div>
  );
}
