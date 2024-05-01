import React, { useState, useEffect } from 'react';
import '../../styles/headerPost/postToast.scss';
import completedIcon from '../../assets/icon/ic_completed.svg';
import deletedIcon from '../../assets/icon/ic_deleted.svg';

const Toast = ({ message }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='sharetoast'>
      {showToast && (
        <div className='sharetoast__container'>
          <div className='sharetoast__message'>
            <img src={completedIcon} alt='URL 복사 성공' />
            <span>{message}</span>
          </div>
          <img src={deletedIcon} alt='닫기 아이콘' />
        </div>
      )}
    </div>
  );
};

export default Toast;
