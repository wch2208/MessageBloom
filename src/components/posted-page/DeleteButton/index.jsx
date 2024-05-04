import React from 'react';
import './DeleteButton.scss';
import deletedicon from '../../../assets/icon/ic_deleted.svg';
import { deleteMessage } from '../../../apis/api';

function DeleteButton({ id, handleDeleteMessage, stopBubbling }) {
  const handleDelete = async (id) => {
    await deleteMessage(id);
    handleDeleteMessage(id);
  };

  const handleDeleteClick = (e) => {
    stopBubbling(e);
    handleDelete(id);
  };

  return (
    <button id='card__delete-btn' onClick={handleDeleteClick}>
      <img src={deletedicon} alt='포스트 카드 삭제 버튼' />
    </button>
  );
}

export default DeleteButton;
