import React from 'react';
import PostCard from '../components/posted-page/PostCard';
import '../styles/posted-page/PostedPage.scss';
import imgPofile01 from '../assets/image/profile/img_profile_01.svg';
import plusicon from '../assets/icon/ic_plus.svg';
import HeaderPost from '../components/headerPost/HeaderPost';

const mockData = [
  {
    id: 1,
    profile: imgPofile01,
    name: '김동훈',
    role: '동료',
    content: '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 조심하세요!',
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
  return (
    <>
      <HeaderPost />
      <div className='posted-page-container'>
        <div className='add-post-card'>
          <div className='add-post-card__plus-icon'>
            <img src={plusicon} alt='포스트 카드 추가 버튼' />
          </div>
        </div>
        {mockData.map((data) => {
          return <PostCard key={data.id} data={data} />;
        })}
      </div>
    </>
  );
}

export default PostedPage;
