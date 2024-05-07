import React from 'react';
import './PostCard.scss';
import DeleteButton from '../../post-id/delete-button';
import getClassByRole from '../../../utils/posted-page/getClassByRole';
import contentSlice from '../../../utils/posted-page/contentSlice';
import getTimeLocale from '../../../utils/posted-page/getTimeLocale';
import getFontByData from '../../../utils/posted-page/getFontByData';

function PostCard({
  data,
  setModalDataByData,
  handleModalOpen,
  setIsDeleteModalOpen,
  handleDeleteDataId,
}) {
  const handleCardClick = () => {
    handleModalOpen(true);
    setModalDataByData(data.id);
  };

  const stopBubbling = (e) => {
    e.stopPropagation();
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
        <DeleteButton
          id={data.id}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          handleDeleteDataId={handleDeleteDataId}
          stopBubbling={stopBubbling}
        />
      </div>
      <div className='card__underline'></div>
      <p className={`card__content ${getFontByData(data.font)}`}>{contentSlice(data.content)}</p>
      <span className='card__date'>{getTimeLocale(data.createdAt)}</span>
    </div>
  );
}

export default PostCard;
