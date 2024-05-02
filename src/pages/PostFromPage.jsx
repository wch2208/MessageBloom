import '../styles/create-message-form/PostFromPage.scss';
import basicProfile from '../assets/image/profile/img_profile_basic.svg';
import profile1 from '../assets/image/profile/img_profile_01.svg';
import CustomDropdown from '../components/create-message-form/CustomDropdown';
import Header from '../components/header/Header';

export default function PostFromPage() {
  const items = [
    { text: 'Noto Sans', id: 1 },
    { text: 'Pretendard', id: 2 },
    { text: '나눔명조', id: 3 },
    { text: '나눔손글씨 손편지체', id: 4 },
  ];

  const members = [
    { text: '지인', id: 1 },
    { text: '친구', id: 2 },
    { text: '동료', id: 3 },
    { text: '가족', id: 4 },
  ];

  const profiles = Array(10).fill({ src: profile1, alt: '프로필 이미지 미리보기' });

  return (
    <>
      <Header />
      <div className='message-form'>
        <div className='message-form__sender'>
          <label htmlFor='nameInput' className='message-form__title'>
            From.
          </label>
          <input
            className='message-form__inputs'
            id='nameInput'
            placeholder='이름을 입력해 주세요.'
          />
        </div>

        <div className='message-form__profile'>
          <span className='message-form__title'>프로필 이미지</span>
          <div className='message-form__profile-container'>
            <img src={basicProfile} alt='프로필 이미지 미리보기' />
            <div className='message-form__profile-options'>
              <span className='message-form__profile-options-title'>
                프로필 이미지를 선택해주세요!
              </span>
              <div className='message-form__profile-preview-container'>
                {profiles.map((profile, i) => {
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
        <div className='message-form__relationship'>
          <label htmlFor='select' className='message-form__title'>
            상대와의 관계
          </label>
          <CustomDropdown props={members} />
        </div>
        <div className='message-form__content'>
          <label htmlFor='textarea' className='message-form__title'>
            내용을 입력해 주세요
          </label>
          <textarea
            className='message-form__text-area'
            name='content'
            id='textarea'
            placeholder='I am your reach text editor.'></textarea>
        </div>
        <div className='message-form__font'>
          <span className='message-form__title'>폰트 선택</span>
          <CustomDropdown props={items} />
        </div>
        <button className='message-form__submit'>생성하기</button>
      </div>
    </>
  );
}
