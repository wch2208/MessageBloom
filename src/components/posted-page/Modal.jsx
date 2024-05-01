import React from 'react';
import getClassByRole from '../../utils/getClassByRole';
import '../../styles/posted-page/Modal.scss';

function Modal({ modalData, handleModalOpen }) {
  const handleWrapperClick = () => {
    handleModalOpen(false);
  };

  const preventBubble = (e) => {
    e.stopPropagation();
  };
  return (
    <div className='modal-wrapper' onClick={handleWrapperClick}>
      <div className='modal-container' onClick={preventBubble}>
        <div className='modal-info'>
          <img
            className='modal-info__img'
            src={modalData.profile}
            alt='받은 포스트 카드 작성자 프로필 이미지'
          />
          <div className='modal-info-detail-container'>
            <p className='modal-info__name'>From. {modalData.name}</p>
            <span className={`modal-info__role ${getClassByRole(modalData.role)}`}>
              {modalData.role}
            </span>
          </div>
          <span className='modal__date'>{modalData.date}</span>
        </div>
        <div className='modal__underline'></div>
        <div className='modal__content-container'>
          <p className='modal__content'>{modalData.content}</p>
        </div>
        <button
          onClick={() => {
            handleModalOpen(false);
          }}
          id='modal-confirm__btn'>
          확인
        </button>
      </div>
    </div>
  );
}

export default Modal;
