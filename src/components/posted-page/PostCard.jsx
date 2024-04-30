import React from 'react';
import '../../styles/posted-page/PostCard.scss';

function PostCard({ data }) {
  return (
    <div className='card-container'>
      <div className='card-info-container'>
        <img
          className='card-info__img'
          src={data.profile}
          alt='받은 포스트 카드 작성자 프로필 이미지'
        />
        <div className='card-info-detail-container'>
          <p className='card-info__name'>From. {data.name}</p>
          <span className='card-info__role'>{data.role}</span>
        </div>
      </div>
      <div className='card-info__underline'></div>
      <p className='card-info__content'>{data.content}</p>
      <span className='card-info__date'>{data.date}</span>
    </div>
  );
}

export default PostCard;
