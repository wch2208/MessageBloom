import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMessages, getMessageCount } from '../../apis/api'; // 수정 필요
import './WriterCounter.scss';

const WriterCounter = ({ id, displayOption }) => {
  const [profileImages, setProfileImages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messages = await getMessages(id);
        const count = await getMessageCount(id);
        setMessageCount(count);

        const sortedProfileImages = messages.map((message) => message.profileImageURL).slice(0, 3);
        setProfileImages(sortedProfileImages);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`writer-counter ${displayOption === 'vertical' ? 'vertical' : ''}`}>
      <div className='writer-counter__profile-images'>
        {profileImages.map((imageUrl, index) => (
          <div className='writer-counter__profile-image' key={index}>
            <img
              src={imageUrl}
              alt={`Profile ${index + 1}`}
              className='writer-counter__profile-image-img'
            />
          </div>
        ))}
        {messageCount > 3 && (
          <span
            className={`writer-counter__remaining-profiles ${
              displayOption === 'vertical' ? 'vertical' : ''
            }`}>
            +{messageCount - 3}
          </span>
        )}
      </div>
      {displayOption === 'vertical' && <br />}
      <div className={`writer-counter__message ${displayOption === 'vertical' ? 'vertical' : ''}`}>
        <span className='writer-counter__message-count-number'>{messageCount}</span>
        <span className='writer-counter__message-count-text'>명이 작성했어요!</span>
      </div>
    </div>
  );
};

export default WriterCounter;
