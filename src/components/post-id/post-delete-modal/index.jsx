import React, { useRef, useState } from 'react';
import './PostDeleteModal.scss';
import { useNavigate } from 'react-router-dom';
import { deleteRecipient } from '../../../apis/api';
import showpwicon from '../../../assets/icon/ic_show_pw.svg';
import noneshowpwicon from '../../../assets/icon/ic_none_show_pw.svg';

function PostDeleteModal({ handlePostDeleteModalOpen, id }) {
  const [isShowPw, setIsShowPw] = useState(false);
  const [isFailConfirm, setIsFailConfirm] = useState(false);
  const pwRef = useRef();
  const navigate = useNavigate();

  const showPwIconClick = () => {
    setIsShowPw(true);
  };
  const noneShowPwIconClick = () => {
    setIsShowPw(false);
  };

  // 포스트 카드 수신자 제거 함수
  const deleteRecipientData = async (id) => {
    await deleteRecipient(id);
  };

  // 포스트 카드 삭제 취소버튼 함수
  const handleCancelClick = () => {
    handlePostDeleteModalOpen(false);
  };

  // 포스트 카드 삭제 확인버튼 함수
  const handleCheckClick = () => {
    const { value } = pwRef.current;
    if (!value) {
      console.log('hi');
      setIsFailConfirm(true);
      setTimeout(() => {
        setIsFailConfirm(false);
      }, 1000);
    } else if (value !== localStorage.getItem(`${id}`)) {
      console.log('hi');
      setIsFailConfirm(true);
      setTimeout(() => {
        setIsFailConfirm(false);
      }, 1000);
    } else {
      deleteRecipientData(id);
      handlePostDeleteModalOpen(false);
      removeLocalStorageKey(id);
      setTimeout(() => {
        navigate(`/list`);
      }, 500);
    }
  };

  // localStorage에 저장된 key 값 제거함수
  const removeLocalStorageKey = (id) => {
    localStorage.removeItem(`${id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCheckClick();
    }
  };

  return (
    <div className='post-delete-modal-wrapper' onClick={handleCancelClick}>
      <div
        className={
          isFailConfirm ? 'post-delete-modal-container fail' : 'post-delete-modal-container'
        }
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <p className='post-delete-modal-container__message'>
          포스트를 삭제하려면 비밀번호가 필요해요!
        </p>
        <div className='post-delete-modal-container__pw-container'>
          <label htmlFor='pw'></label>
          <input
            type={isShowPw ? 'text' : 'password'}
            id='pw'
            className='post-delete-modal-container__pw-container__input'
            ref={pwRef}
            onKeyDown={handleKeyDown}
          />
          {isShowPw ? (
            <img
              className='post-delete-modal-container__pw-container__pw-icon show'
              src={showpwicon}
              onClick={noneShowPwIconClick}
            />
          ) : (
            <img
              className='post-delete-modal-container__pw-container__pw-icon none-show'
              src={noneshowpwicon}
              onClick={showPwIconClick}
            />
          )}
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
