import { PROFILES } from './messageConstants';
import './ProfileOptions.scss';

export default function ProfileOptions({ formData, setFormData }) {
  const handleProfileClick = (e) => {
    const profile = e.target.src;
    if (profile) {
      setFormData({ ...formData, profileImageURL: profile });
    }
  };

  return (
    <div className='message-form__profile'>
      <span className='message-form__title'>프로필 이미지</span>
      <div className='message-form__profile-container'>
        <img
          className='message-form__profile--selected'
          src={formData.profileImageURL}
          alt='선택된 프로필 이미지'
        />
        <div className='message-form__profile-options'>
          <p className='message-form__profile-options-title'>프로필 이미지를 선택해주세요!</p>
          <div className='message-form__profile-preview-container' onClick={handleProfileClick}>
            {PROFILES.map((profile, i) => {
              return (
                <img
                  key={i}
                  className='message-form__profile--preview'
                  src={profile.src}
                  alt={profile.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
