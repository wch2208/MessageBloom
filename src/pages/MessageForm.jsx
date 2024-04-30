import '../styles/message-form/MessageForm.scss';
import basicProfile from '../assets/image/profile/img_profile_basic.svg';
import profile1 from '../assets/image/profile/img_profile_01.svg';
import CustomDropdown from '../components/CustomDropdown';

export default function MessageForm() {
  const items = [
    { text: 'Noto Sans', id: 1 },
    { text: 'Pretendard', id: 2 },
    { text: '나눔명조', id: 3 },
    { text: '나눔손글씨 손편지체', id: 4 },
  ];
  const members = [
    { text: '동료', id: 1 },
    { text: '멘토', id: 2 },
    { text: '멘티', id: 3 },
    { text: '매니저', id: 4 },
  ];
  return (
    <>
      <div className='message-form'>
        {/* 보내는사람 */}
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

        {/* 프로필이미지 */}
        <div className='message-form__profile'>
          <sapn className='message-form__title'>프로필 이미지</sapn>
          <div className='message-form__profile-container'>
            <img src={basicProfile} alt='프로필 이미지 미리보기' />
            <div className='message-form__profile-options'>
              <span className='message-form__profile-options-title'>
                프로필 이미지를 선택해주세요!
              </span>
              <div className='message-form__profile-preview-container'>
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
                <img
                  className='message-form__profile--preview'
                  src={profile1}
                  alt='프로필 이미지 미리보기'
                />
              </div>
            </div>
          </div>
        </div>
        {/* 상대와의 관계 */}
        <div className='message-form__relationship'>
          <label htmlFor='select' className='message-form__title'>
            상대와의 관계
          </label>
          {/* <select id='select' className='message-form__inputs'>
            <option>동료</option>
            <option>멘토</option>
            <option>멘티</option>
            <option>매니저</option>
          </select> */}
          <CustomDropdown props={members} />
        </div>
        {/* 내용 */}
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
        {/* 폰트 */}
        <div className='message-form__font'>
          <span className='message-form__title'>폰트 선택</span>
          {/* <select className='message-form__inputs'>
            <option>Noto Sans</option>
            <option>Pretendard</option>
            <option>나눔명조</option>
            <option>나눔손글씨체 손편지체</option>
          </select> */}
          <CustomDropdown props={items} />
        </div>
        <button className='message-form__submit'>생성하기</button>
      </div>
    </>
  );
}
