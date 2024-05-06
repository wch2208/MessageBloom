import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMessages, getMessageCount } from '../../apis/api'; // 수정 필요
import './WriterCounter.scss';

const WriterCounter = () => {
  const [profileImages, setProfileImages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messages = await getMessages(id);
        const count = await getMessageCount(id);
        setMessageCount(count);

        const sortedProfileImages = messages.map((message) => message.profileImageURL).slice(0, 3); // 최신순으로 3개만 가져오기
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
    <div className='writer-counter'>
      {/* 프로필 이미지 */}
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
        {/* 남은 프로필 이미지 수 */}
        {messageCount > 3 && (
          <span className='writer-counter__remaining-profiles'>+{messageCount - 3}</span>
        )}
      </div>
      {/* 메시지 수 */}
      <div className='writer-counter__message'>
        <span className='writer-counter__message-count-number'>{messageCount}</span>
        <span className='writer-counter__message-count-text'>명이 작성했어요!</span>
      </div>
    </div>
  );
};

export default WriterCounter;
