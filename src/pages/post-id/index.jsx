import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostCard from '../../components/post-id/post-card';
import { getMessages, getRecipient } from '../../apis/api';
import './PostId.scss';
import plusicon from '../../assets/icon/ic_plus.svg';
import Modal from '../../components/post-id/modal';
import DeleteModal from '../../components/post-id/delete-modal';
import HeaderPost from '../../components/headerPost/HeaderPost';
import SearchInput from '../../components/post-id/search-input';

function PostId() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [backgroundImg, setBackgroundImg] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const [messagesData, setMessagesData] = useState([]);
  const [recipientData, setRecipientData] = useState([]);
  const [deleteDataId, setDeleteDataId] = useState('');
  const [modalData, setModalData] = useState([]);
  const [searchData, setSearchData] = useState([]);

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

  const handleDeleteMessage = (messageId) => {
    setMessagesData(messagesData.filter((data) => data.id !== messageId));
  };

  const handleDeleteModalOpen = (value) => {
    setIsDeleteModalOpen(value);
  };

  const handleDeleteDataId = (id) => {
    setDeleteDataId(id);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  const setSearchInfo = (category, value) => {
    setFilteredData(category, value);
  };

  const setFilteredData = (category, value) => {
    const filteredData = messagesData.filter((data) => {
      if (category === '전체') return data.sender.includes(value) || data.content.includes(value);
      if (category === '이름') return data.sender.includes(value);
      if (category === '내용') return data.content.includes(value);
    });
    applyFilterToSearchData(filteredData);
  };

  const applyFilterToSearchData = (data) => {
    setSearchData(data);
  };

  return (
    <>
      <HeaderPost />
      <div className={`post-wrapper ${backgroundColor}`} style={backgroundImageStyle}>
        <SearchInput setSearchInfo={setSearchInfo} />
        <div className='posted-page-container'>
          <div className='add-post-card' onClick={() => navigate(`/post/${id}/message`)}>
            <div className='add-post-card__plus-icon'>
              <img src={plusicon} alt='포스트 카드 추가 버튼' />
            </div>
          </div>
          {(searchData.length > 0 ? searchData : messagesData).map((data) => (
            <div key={data.id}>
              <PostCard
                data={data}
                handleModalOpen={handleModalOpen}
                handleDeleteDataId={handleDeleteDataId}
                setModalDataByData={setModalDataByData}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
              />
            </div>
          ))}
          {isModalOpen && <Modal handleModalOpen={handleModalOpen} modalData={modalData} />}
          {isDeleteModalOpen && (
            <DeleteModal
              handleDeleteMessage={handleDeleteMessage}
              deleteDataId={deleteDataId}
              handleDeleteModalOpen={handleDeleteModalOpen}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default PostId;
