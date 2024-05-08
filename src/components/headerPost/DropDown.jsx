import React from 'react';

export default function DropDown({ isOpen, onToggle, onKakaoShare, onCopyURL }) {
  return (
    isOpen && (
      <ul className='header-post__container_info_container_share-dropdown_menu'>
        <li onClick={onKakaoShare}>카카오톡 공유</li>
        <li onClick={onCopyURL}>URL 공유</li>
      </ul>
    )
  );
}
