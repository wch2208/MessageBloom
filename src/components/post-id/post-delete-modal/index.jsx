import React from 'react';
import './PostDeleteModal.scss';

function PostDeleteModal({ handlePostDeleteModalOpen }) {
  const handleCancelClick = () => {
    handlePostDeleteModalOpen(false);
  };

  const handleCheckClick = () => {
    handlePostDeleteModalOpen(false);
  };

  return (
    <div className='post-delete-modal-wrapper' onClick={handleCancelClick}>
      <div
        className='post-delete-modal-container'
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <p className='post-delete-modal-container__message'>
          포스트를 삭제하려면 비밀번호가 필요해요!
        </p>
        <div className='post-delete-modal-container__pw-container'>
          <label htmlFor='pw'></label>
          <input
            type='password'
            id='pw'
            className='post-delete-modal-container__pw-container__input'
          />
        </div>
        <div className='post-delete-modal-container__btns'>
          <button id='post-delete-modal-container__btns-check-btn' onClick={handleCheckClick}>
            확인
          </button>
          <button id='post-delete-modal-container__btns-cancel-btn' onClick={handleCancelClick}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDeleteModal;
