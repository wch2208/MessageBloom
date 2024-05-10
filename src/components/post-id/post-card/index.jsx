import React from 'react';
import './PostCard.scss';
import DeleteButton from '../postcard-delete-button';
import getClassByRole from '../../../utils/post-id/getClassByRole';
import contentSlice from '../../../utils/post-id/contentSlice';
import getTimeLocale from '../../../utils/post-id/getTimeLocale';
import getFontByData from '../../../utils/post-id/getFontByData';

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

  const editText = (text) => {
    const lines = text.split(/<br>|\n/);
    const filteredLines = lines.filter((line) => line !== '<br>');
    const paragraphs = filteredLines.map((line, index) => (
      <p className={`card__content ${getFontByData(data.font)}`} key={index}>
        {line === '' ? ' ' : line}
      </p>
    ));
    return <div>{paragraphs}</div>;
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
      <div className='card__contents'>{editText(data.content)}</div>
      <span className='card__date'>{getTimeLocale(data.createdAt)}</span>
    </div>
  );
}

export default PostCard;
