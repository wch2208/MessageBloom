import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostCard from '../../components/posted-page/PostCard';
import { getMessages, getRecipient } from '../../apis/api';
import './PostId.scss';
import plusicon from '../../assets/icon/ic_plus.svg';
import Modal from '../../components/posted-page/Modal';

function PostId() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundImg, setBackgroundImg] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [messagesData, setMessagesData] = useState([]);
  const [recipientData, setRecipientData] = useState([]);
  const [modalData, setModalData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getInfosFromData = async (id) => {
    const [messages, recipient] = await Promise.all([getMessages(id), getRecipient(id)]);
    setMessagesData(messages);
    setRecipientData(recipient);
  };

  useEffect(() => {
    getInfosFromData(id);
  }, []);

  useEffect(() => {
    selectBackgroundTypeByData(recipientData);
  }, [recipientData]);

  const setModalDataByData = (modalId) => {
    const [modalItem] = messagesData.filter((data) => data.id == modalId);
    setModalData(modalItem);
  };

  const handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  const selectBackgroundTypeByData = (recipientData) => {
    recipientData.backgroundImageURL === null
      ? setBackgroundColor(recipientData.backgroundColor)
      : setBackgroundImg(recipientData.backgroundImageURL);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <div className={`post-wrapper ${backgroundColor}`} style={backgroundImageStyle}>
      <div className='posted-page-container'>
        <div className='add-post-card' onClick={() => navigate(`/post/${id}/message`)}>
          <div className='add-post-card__plus-icon'>
            <img src={plusicon} alt='포스트 카드 추가 버튼' />
          </div>
        </div>
        {messagesData.map((data) => {
          return (
            <div key={data.id}>
              <PostCard
                setModalDataByData={setModalDataByData}
                handleModalOpen={handleModalOpen}
                data={data}
              />
            </div>
          );
        })}
        {isModalOpen && <Modal handleModalOpen={handleModalOpen} modalData={modalData} />}
      </div>
    </div>
  );
}

export default PostId;
