import React, { useState, useEffect } from 'react';
import '../../styles/headerPost/HeaderPost.scss';
import CountPerson from './CountPerson';
import Emojis from './DropDownEmojis';
import Toast from './PostToast';
import addicon from '../../assets/icon/ic_add_20.svg';
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
          {/* 창의 넓이가 1200px 이상이면 CountPerson 컴포넌트를 렌더링 */}
          {windowWidth >= 1200 && (
            <div className='headerPost__person-wrapper'>
              <CountPerson />
            </div>
          )}

          <div className='headerPost__emoji-wrapper'>
            <Emojis />
          </div>

          <div className='headerPost__button-wrapper'>
            <button className='headerPost__post-btn'>
              <img src={addicon} alt='이모지추가' />
              {/*추가*/}
            </button>
            <img className='headerPost__rectangle' src={rectangle} alt='가림막' />
            <div className='headerPost__dropdown'>
              <button className='headerPost__share-btn' onClick={toggleDropdown}>
                <img src={shareicon} alt='페이지공유' style={{ cursor: 'pointer' }} />
              </button>
              {dropdownOpen && (
                <ul className='headerPost__dropdown-menu'>
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
      {dropdownOpen || (showToast && <Toast message={toastMessage} />)}
    </div>
  );
};

export default HeaderPost;
