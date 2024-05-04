import React from 'react';
import './DeleteButton.scss';
import deletedicon from '../../../assets/icon/ic_deleted.svg';

function DeleteButton(props) {
  return (
    <button id='card__delete-btn'>
      <img src={deletedicon} alt='포스트 카드 삭제 버튼' />
    </button>
  );
}

export default DeleteButton;
