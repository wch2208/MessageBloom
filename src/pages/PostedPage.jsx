import React, { useEffect, useMemo, useState } from 'react';
import PostCard from '../components/posted-page/PostCard';
import '../styles/posted-page/PostedPage.scss';
import imgpofile01 from '../assets/image/profile/img_profile_01.svg';
import imgwallpaper from '../assets/image/wallpaper/img_wallpaper_01.svg';
import plusicon from '../assets/icon/ic_plus.svg';
import Modal from '../components/posted-page/Modal';
import Header from '../components/header/Header';
import HeaderPost from '../components/headerPost/HeaderPost';

const mockData = [
  {
    id: 1,
    recipientId: 1,
    sender: '김동훈',
    profileImageURL: imgpofile01,
    relationship: '친구',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    font: 'Noto-Sans',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    recipientId: 1,
    sender: '김동훈',
    profileImageURL: imgpofile01,
    relationship: '동료',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    font: 'pretendard',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    recipientId: 1,
    sender: '김동훈',
    profileImageURL: imgpofile01,
    relationship: '지인',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    font: 'NanumMyengjo',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    recipientId: 1,
    sender: '김동훈',
    profileImageURL: imgpofile01,
    relationship: '가족',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요.',
    font: 'NanumSonPyeonJiCe',
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: 5,
    recipientId: 1,
    sender: '김동훈',
    profileImageURL: imgpofile01,
    relationship: '동료',
    content:
      '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
    font: 'pretendard',
    createdAt: new Date().toLocaleDateString(),
  },
];

const recipMockData = [
  {
    id: 1,
    name: '',
    backgroundColor: '',
    backgroundImageURL: 'wallpaper01',
    createAt: '2024-05-01',
    messageCount: '1',
    recentMessage: '',
    reactionCount: 0,
    topReactions: '',
  },
];

function PostedPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [background, setBackground] = useState('');
  const [modalData, setModalData] = useState([]);

  const setModalDataByData = (modalId) => {
    const [modalItem] = mockData.filter((data) => data.id == modalId);
    setModalData(modalItem);
  };

  const handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  const setBackgroundByData = useMemo(() => {
    return () => {
      recipMockData[0].backgroundColor === ''
        ? setBackground(recipMockData[0].backgroundImageURL)
        : setBackground(recipMockData[0].backgroundColor);
    };
  }, [recipMockData, setBackground]);

  useEffect(() => {
    setBackgroundByData();
  }, []);

  return (
    <>
      <Header />
      <HeaderPost />
      <div className={`post-wrapper ${background}`}>
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
      </div>
    </>
  );
}

export default PostedPage;
