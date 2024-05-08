import React, { useRef } from 'react';
import './ImageAddModal.scss';

function ImageAddModal({ setHandleModalOpen, setRecipient, setCustomImg }) {
  const urlInput = useRef();
  const handleCancelClick = () => {
    setHandleModalOpen(false);
  };

  const addURL = () =>
    setRecipient((prevRecipient) => ({
      ...prevRecipient,
      backgroundImageURL: urlInput.current.value,
    }));

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addURL();
      setCustomImg(urlInput.current.value);
      setHandleModalOpen(false);
    }
  };

  const handleConfirmClick = () => {
    addURL();
    setCustomImg(urlInput.current.value);
    setHandleModalOpen(false);
  };

  return (
    <div className='post-delete-modal-wrapper' onClick={handleCancelClick}>
      <div
        className={'post-delete-modal-container'}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <p className='post-delete-modal-container__message'>이미지 주소를 입력해주세요!</p>
        <input
          type='text'
          placeholder='https://images.pexels.com/photos/3183132/...'
          className='post-delete-modal-container__input'
          id='urlInput'
          ref={urlInput}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <div className='post-delete-modal-container__btns'>
          <button id='post-delete-modal-container__btns-check-btn' onClick={handleConfirmClick}>
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

export default ImageAddModal;
