import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './HeaderPost.scss';
import WriterCounter from '../commons/WriterCounter.jsx';
import Emojis from './components/DropDownEmojis.jsx';
import shareicon20 from '../../assets/icon/ic_share_20.svg';
import shareicon24 from '../../assets/icon/ic_share_24.svg';
import rectangle from '../../assets/icon/ic_rectangle.svg';
import { getRecipient } from '../../apis/api.js';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

export default function HeaderPost() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [recipientData, setRecipientData] = useState(null);
  const { id } = useParams();

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

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  const shareicon = windowWidth >= 767 ? shareicon24 : shareicon20;
  const notify = (message) => toast.info(message);

  const copyURLToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => notify('URL이 복사되었습니다!'))
      .catch((error) => console.error('Failed to copy URL:', error));
  };

  // 배포한 자신의 사이트
  const realUrl = import.meta.env.VITE_BASE_URL;
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = window.location.href;

  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    window.Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    window.Kakao.init(import.meta.env.VITE_KAKAO_JS_SDK_KEY);
    // 잘 적용되면 true 를 뱉는다.
    console.log(window.Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '오늘의 디저트',
        description: '아메리카노, 빵, 케익',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

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
              <div className='header-post__container_info_container_share-dropdown'>
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
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  toastClassName='custom-toast'
                  theme='colored'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
