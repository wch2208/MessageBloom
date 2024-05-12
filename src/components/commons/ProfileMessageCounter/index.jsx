import './ProfileMessageCounter.scss';

const ProfileMessageCounter = ({ count = 0, profiles = [], displayOption, fetchData }) => {
  // 최신순으로 3개의 프로필 이미지만 추출합니다.
  const recentProfiles = profiles.slice(0, 3);

  // fetchData 함수를 호출하여 데이터를 가져옵니다.
  return (
    <div className='profile-message-counter'>
      <div className='profile-message-counter__profile-images'>
        {profiles.map((profileImageURL, index) => (
          <div className='profile-message-counter__profile-image' key={index}>
            <img
              src={profileImageURL}
              className='profile-message-counter__profile-image-img'
              alt={`Profile ${index + 1}: ${profileImageURL}`}
            />
          </div>
        ))}
        {/* 프로필이 3개 초과일 경우 "+{count-3}"로 남은 프로필 수를 표시합니다. */}
        {count > 3 && (
          <span className='profile-message-counter__remaining-profiles'>+{count - 3}</span>
        )}
      </div>
      {/* 세로 옵션이 설정되어 있다면 줄 바꿈을 추가합니다. */}
      {displayOption === 'vertical' && <br />}
      <div className='profile-message-counter__message'>
        {/* 작성자 수를 표시합니다. */}
        <span className='profile-message-counter__message-count-number'>{count}</span>
        <span className='profile-message-counter__message-count-text'>명이 작성했어요!</span>
      </div>
    </div>
  );
};

export default ProfileMessageCounter;
