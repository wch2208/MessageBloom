import React from 'react';
import './DeleteModal.scss';
import { deleteMessage } from '../../../apis/api';

function DeleteModal({ handleDeleteMessage, deleteDataId, handleDeleteModalOpen }) {
  const handleDeleteData = async (id) => {
    await deleteMessage(id);
    handleDeleteCard(id);
  };

  const handleDeleteCard = (id) => {
    handleDeleteMessage(id);
  };

  const handleCheckClick = () => {
    handleDeleteData(deleteDataId);
    handleDeleteModalOpen(false);
  };

  const handleCancelClick = () => {
    handleDeleteModalOpen(false);
  };

  return (
    <div className='delete-modal-wrapper' onClick={handleCancelClick}>
      <div
        className='delete-modal-container'
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <p className='delete-modal-container__message'>정말 삭제하시겠어요?</p>
        <div className='delete-modal-container__btns'>
          <button id='delete-modal-container__btns-check-btn' onClick={handleCheckClick}>
            확인
          </button>
          <button id='delete-modal-container__btns-cancel-btn' onClick={handleCancelClick}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
