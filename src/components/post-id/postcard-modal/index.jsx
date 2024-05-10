import React from 'react';
import getClassByRole from '../../../utils/post-id/getClassByRole';
import './Modal.scss';
import getTimeLocale from '../../../utils/post-id/getTimeLocale';
import getFontByData from '../../../utils/post-id/getFontByData';

function Modal({ modalData, handleModalOpen }) {
  const handleWrapperClick = () => {
    handleModalOpen(false);
  };

  const editText = (text) => {
    const lines = text.split(/<br>|\n/);
    const paragraphs = lines.map((line, index) => (
      <p className={`modal__content ${getFontByData(modalData.font)}`} key={index}>
        {line === '' ? ' ' : line}
      </p>
    ));
    return <div>{paragraphs}</div>;
  };

  return (
    <div className='modal-wrapper' onClick={handleWrapperClick}>
      <div
        className='modal-container'
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <div className='modal-info'>
          <img
            className='modal-info__img'
            src={modalData.profileImageURL}
            alt='받은 포스트 카드 작성자 프로필 이미지'
          />
          <div className='modal-info-detail-container'>
            <p className='modal-info__name'>From. {modalData.sender}</p>
            <span className={`modal-info__role ${getClassByRole(modalData.relationship)}`}>
              {modalData.relationship}
            </span>
          </div>
          <span className='modal__date'>{getTimeLocale(modalData.createdAt)}</span>
        </div>
        <div className='modal__underline'></div>
        <div className='modal__content-container'>{editText(modalData.content)}</div>
        <button
          onClick={() => {
            handleModalOpen(false);
          }}
          id='modal-confirm__btn'
          autoFocus>
          확인
        </button>
      </div>
    </div>
  );
}

export default Modal;
