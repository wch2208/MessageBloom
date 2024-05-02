import React from 'react';
import '../../styles/posted-page/PostCard.scss';
import getClassByRole from '../../utils/getClassByRole';
import deletedicon from '../../assets/icon/ic_deleted.svg';
import contentSlice from '../../utils/contentSlice';

function PostCard({ data, setModalDataByData, handleModalOpen }) {
  const handleCardClick = () => {
    handleModalOpen(true);
    setModalDataByData(data.id);
  };

  return (
    <div className='card-container' onClick={handleCardClick}>
      <div className='card-info-container'>
        <img
          className='card-info__img'
          src={data.profileImageURL}
          alt='받은 포스트 카드 작성자 프로필 이미지'
        />
        <div className='card-info-detail-container'>
          <p className='card-info__name'>From. {data.sender}</p>
          <span className={`card-info__role ${getClassByRole(data.relationship)}`}>
            {data.relationship}
          </span>
        </div>
        <button id='card__delete-btn'>
          <img src={deletedicon} alt='포스트 카드 삭제 버튼' />
        </button>
      </div>
      <div className='card__underline'></div>
      <p className={`card__content ${data.font}`}>{contentSlice(data.content)}</p>
      <span className='card__date'>{data.createdAt}</span>
    </div>
  );
}

export default PostCard;
