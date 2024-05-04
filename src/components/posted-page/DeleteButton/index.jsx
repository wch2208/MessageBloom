import React from 'react';
import './DeleteButton.scss';
import deletedicon from '../../../assets/icon/ic_deleted.svg';
import { deleteMessage } from '../../../apis/api';

function DeleteButton({ id, handleDeleteMessage, stopBubbling }) {
  const handleDeleteData = async (id) => {
    await deleteMessage(id);
    handleDeleteCard(id);
  };

  const handleDeleteCard = (id) => {
    handleDeleteMessage(id);
  };

  const handleDeleteClick = (e) => {
    stopBubbling(e);
    if (window.confirm('정말 삭제하시겠어요?')) {
      handleDeleteData(id);
    }
  };

  return (
    <button id='card__delete-btn' onClick={handleDeleteClick}>
      <img src={deletedicon} alt='포스트 카드 삭제 버튼' />
    </button>
  );
}

export default DeleteButton;
