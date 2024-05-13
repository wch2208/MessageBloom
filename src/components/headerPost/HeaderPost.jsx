import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './HeaderPost.scss';
import WriterCounter from '../commons/WriterCounter.jsx';
import Emojis from './components/DropDownEmojis.jsx';
import shareicon20 from '../../assets/icon/ic_share_20.svg';
import shareicon24 from '../../assets/icon/ic_share_24.svg';
import rectangle from '../../assets/icon/ic_rectangle.svg';
import { getRecipient } from '../../apis/api.js';
import useWindowWidth from '../../hooks/useWindowWidth.js';
import { DESKTOP_WIDTH, TABLET_WIDTH } from '../../utils/windowWidthConstants.js';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HeaderPost() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [recipientData, setRecipientData] = useState(null);
  const { id } = useParams();
  const windowWidth = useWindowWidth();
  const isDesktopSize = windowWidth >= DESKTOP_WIDTH;
  const isTabletSize = windowWidth >= TABLET_WIDTH;
  const shareicon = isTabletSize ? shareicon24 : shareicon20;
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const recipient = await getRecipient(id);
        setRecipientData(recipient);
      } catch (error) {
        console.error('Error fetching recipient data:', error);
      }
    }

    fetchData();
  }, [id]);

  const notify = (message) => toast.success(message);
  const copyURLToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => notify('URL이 복사되었습니다!'))
      .catch((error) => console.error('Failed to copy URL:', error));
  };

  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init('8859f57551eb726e1f0cbda932511b53');
  }, []);

  const shareKakao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 107707,
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='header-post'>
      <div className='header-post__container'>
        {recipientData && (
          <div className='header-post__container_to-name'>To. {recipientData.name}</div>
        )}
        <div className='header-post__container_info'>
          {isDesktopSize && (
            <>
              <div className='header-post__container_info_person-wrapper'>
                <WriterCounter id={id} />
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
              <div
                ref={dropdownRef}
                className='header-post__container_info_container_share-dropdown'>
                <button
                  className='header-post__container_info_container_share-dropdown_btn'
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <img src={shareicon} alt='페이지공유' />
                </button>
                {dropdownOpen && (
                  <ul className='header-post__container_info_container_share-dropdown_menu'>
                    <li onClick={shareKakao}>카카오톡 공유</li>
                    <li onClick={copyURLToClipboard}>URL 공유</li>
                  </ul>
                )}
                <ToastContainer
                  position='bottom-center'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable={true}
                  pauseOnHover={false}
                  toastClassName='custom-toast'
                  theme='dark'
                  limit={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
