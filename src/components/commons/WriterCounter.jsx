import { useState, useEffect } from 'react';
import { getMessages, getCommenterCount } from '../../apis/api';
import './WriterCounter.scss';

const WriterCounter = () => {
  const [profileImages, setProfileImages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messages = await getMessages();
        const commenterCount = await getCommenterCount();
        console.log('Commenter count:', commenterCount);
        setMessageCount(commenterCount.count);
        // 프로필 이미지가 최대 3개
        const limitedProfileImages =
          commenterCount.count > 3
            ? [
                profileImages[0],
                profileImages[1],
                profileImages[2],
                `+(${commenterCount.count - 3})`,
              ]
            : profileImages;
        setProfileImages(limitedProfileImages);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Writer Counter</h2>
      <div>
        {/* 프로필 이미지 */}
        <div>
          {profileImages.map((imageUrl, index) => (
            <div key={index}>
              {/* 인원수를 보여주는 경우 */}
              {index === 3 ? (
                <span>{imageUrl}</span>
              ) : (
                <img src={imageUrl} alt={`Profile ${index + 1}`} height={28} width={28} />
              )}
            </div>
          ))}
        </div>
        {/* 메시지 수 */}
        <span>
          <span>{messageCount}</span> 명이 작성했어요!
        </span>
      </div>
    </div>
  );
};

export default WriterCounter;
