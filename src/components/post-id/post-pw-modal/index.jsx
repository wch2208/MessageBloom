import React, { useState, useRef } from 'react';
import './PostPwModal.scss';
import showpwicon from '../../../assets/icon/ic_show_pw.svg';
import noneshowpwicon from '../../../assets/icon/ic_none_show_pw.svg';

function PostPwModal({ id, handleSetPwModalOpen }) {
  const [isShowPw, setIsShowPw] = useState(false);
  const pwRef = useRef();

  const showPwIconClick = () => {
    setIsShowPw(true);
  };
  const noneShowPwIconClick = () => {
    setIsShowPw(false);
  };

  const setPwToLocalStorage = () => {
    const { value } = pwRef.current;
    if (value) {
      localStorage.setItem(`${id}`, value);
    }
    handleSetPwModalOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setPwToLocalStorage();
    }
  };

  return (
    <div className='post-pw-modal-wrapper'>
      <div className='post-pw-modal-container'>
        <p className='post-pw-modal-container__message'>본인인증을 위한 비밀번호를 설정해주세요!</p>
        <div className='post-pw-modal-container__pw-container'>
          <label htmlFor='pw'></label>
          <input
            type={isShowPw ? 'text' : 'password'}
            id='pw'
            className='post-pw-modal-container__pw-container__input'
            ref={pwRef}
            onKeyDown={handleKeyDown}
          />
          {isShowPw ? (
            <img
              className='post-pw-modal-container__pw-container__pw-icon show'
              src={showpwicon}
              onClick={noneShowPwIconClick}
            />
          ) : (
            <img
              className='post-pw-modal-container__pw-container__pw-icon none-show'
              src={noneshowpwicon}
              onClick={showPwIconClick}
            />
          )}
          <button id='post-pw-modal-container__check-btn' onClick={setPwToLocalStorage}>
            생성
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostPwModal;
