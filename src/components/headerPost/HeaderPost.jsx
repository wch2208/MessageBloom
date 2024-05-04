import React, { useState, useEffect } from 'react';
import '.HeaderPost.scss';
import CountPerson from './components/CountPerson.jsx';
import Emojis from './components/DropDownEmojis.jsx';
import Toast from './components/PostToast.jsx';
import shareicon from '../../assets/icon/ic_share_20.svg';
import rectangle from '../../assets/icon/ic_rectangle.svg';

const HeaderPost = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleShareOptionClick = (option) => {
    console.log('Selected option:', option);
    setToastMessage(`${option}이 복사되었습니다.`);
    setShowToast(true);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='headerPost'>
      <div className='headerPost__container'>
        <div className='headerPost__toname'>To. Ashley Kim</div>

        <div className='headerPost__info-wrapper'>
          {windowWidth >= 1200 && (
            <div className='headerPost__person-wrapper'>
              <CountPerson />
            </div>
          )}

          <div className='headerPost__emoji-Share-Control'>
            <div className='headerPost__emoji-Control'>
              <Emojis />
            </div>
            <img className='headerPost__rectangle' src={rectangle} alt='가림막' />
            <div className='headerPost__Share-Control'>
              <div className='headerPost__Share-dropdown'>
                <button className='headerPost__share-btn' onClick={toggleDropdown}>
                  <img src={shareicon} alt='페이지공유' style={{ cursor: 'pointer' }} />
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
};

export default HeaderPost;
