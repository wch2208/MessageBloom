import React from 'react';
import PostCard from '../components/posted-page/PostCard';
import '../styles/posted-page/PostedPage.scss';
import imgPofile01 from '../assets/image/profile/img_profile_01.svg';
import plusicon from '../assets/icon/ic_plus.svg';
import { useState } from 'react';
import Modal from '../components/posted-page/Modal';

const mockData = [
  {
    id: 1,
    profile: imgPofile01,
    name: '김동훈',
    role: '동료',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    profile: imgPofile01,
    name: '김동훈',
    role: '친구',
    content: '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    date: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    profile: imgPofile01,
    name: '김동훈',
    role: '가족',
    content: '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    date: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    profile: imgPofile01,
    name: '김동훈',
    role: '지인',
    content: '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    date: new Date().toLocaleDateString(),
  },
];

function PostedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const setModalDataByData = (modalId) => {
    const [modalItem] = mockData.filter((data) => data.id == modalId);
    setModalData(modalItem);
  };

  const handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  return (
    <div className='posted-page-container'>
      <div className='add-post-card'>
        <div className='add-post-card__plus-icon'>
          <img src={plusicon} alt='포스트 카드 추가 버튼' />
        </div>
      </div>
      {mockData.map((data) => {
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
  );
}

export default PostedPage;
