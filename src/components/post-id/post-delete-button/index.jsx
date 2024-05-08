import React from 'react';
import './PostDeleteButton.scss';

function PostDeleteButton() {
  return (
    <div className='post-delete-container'>
      <button className='post-delete-container__delete-btn'>포스트 삭제하기</button>
    </div>
  );
}

export default PostDeleteButton;
