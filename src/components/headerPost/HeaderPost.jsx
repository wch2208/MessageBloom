import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './HeaderPost.scss';
import WriterCounter from '../commons/WriterCounter.jsx';
import Emojis from './components/DropDownEmojis.jsx';
import Toast from './components/PostToast.jsx';
import shareicon20 from '../../assets/icon/ic_share_20.svg';
import shareicon24 from '../../assets/icon/ic_share_24.svg';
import rectangle from '../../assets/icon/ic_rectangle.svg';
import { getRecipient } from '../../apis/api.js';

export default function HeaderPost() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [recipientData, setRecipientData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const recipient = await getRecipient(id);
      setRecipientData(recipient);
    })();

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  const shareicon = windowWidth >= 767 ? shareicon24 : shareicon20;

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleShareOptionClick(option) {
    const message = `${option}이 복사되었습니다.`;
    setToastMessage(message);
    setShowToast(true);
    setDropdownOpen(false);
  }

  return (
    <div className='header-post'>
      <div className='header-post__container'>
        {recipientData && (
          <div className='header-post__container_to-name'>To. {recipientData.name}</div>
        )}
        <div className='header-post__container_info'>
          {windowWidth >= 1200 && (
            <>
              <div className='header-post__container_info_person-wrapper'>
                <WriterCounter id={id} displayOption='grouped' />
              </div>
              <img
                className='header-post__container_info_rectangle-1'
                src={rectangle}
                alt='가림막'
              />
            </>
          )}

          <div className='header-post__container_info_container'>
            <div className='header-post__container_info_container-emoji'>
              {recipientData && <Emojis recipientId={recipientData.id} />}
            </div>
            <img
              className='header-post__container_info_container_rectangle-2'
              src={rectangle}
              alt='가림막'
            />
            <div className='header-post__container_info_container_share'>
              <div className='header-post__container_info_container_share-dropdown'>
                <button
                  className='header-post__container_info_container_share-dropdown_btn'
                  onClick={toggleDropdown}>
                  <img src={shareicon} alt='페이지공유' />
                </button>
                {dropdownOpen && (
                  <ul className='header-post__container_info_container_share-dropdown_menu'>
                    <li onClick={() => handleShareOptionClick('KakaoTalk')}>카카오톡 공유</li>
                    <li onClick={() => handleShareOptionClick('URL')}>URL 공유</li>
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
