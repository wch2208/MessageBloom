import '../styles/message-form/MessageForm.scss';

export default function MessageForm() {
  return (
    <>
      <div className='message-form'>
        {/* 보내는사람 */}
        <div className='message-form__sender'>
          <label htmlFor='nameInput' className='message-form__title'>
            From.
          </label>
          <input id='nameInput' placeholder='이름을 입력해 주세요.' />
        </div>

        {/* 프로필이미지 */}
        <div className='message-form__profile'>
          <sapn className='message-form__title'>프로필 이미지</sapn>
          <div>
            <img alt='프로필 이미지 미리보기' />
            <div className='message-form__profile-options'>
              <span>프로필 이미지를 선택해주세요!</span>
              <div>프로필 이미지들..</div>
            </div>
          </div>
        </div>
        {/* 상대와의 관계 */}
        <div className='message-form__relationship'>
          <label htmlFor='select' className='message-form__title'>
            상대와의 관계
          </label>
          <select id='select'>
            <option>동료</option>
            <option>멘토</option>
            <option>멘티</option>
            <option>매니저</option>
          </select>
        </div>
        {/* 내용 */}
        <div className='message-form__content'>
          <label htmlFor='textarea' className='message-form__title'>
            내용을 입력해 주세요
          </label>
          <textarea name='content' id='textarea' cols='30' rows='10'></textarea>
        </div>
        {/* 폰트 */}
        <div className='message-form__font'>
          <span className='message-form__title'>폰트 선택</span>
          <select>
            <option>Noto Sans</option>
            <option>Pretendard</option>
          </select>
        </div>
        <button className='message-form__submit'>생성하기</button>
      </div>
    </>
  );
}
