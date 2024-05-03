import '../styles/create-message-form/PostToPage.scss';
import ToggleOption from '../components/create-message-form/ToggleOption';

export default function PostToPage() {
  return (
    <>
      <Header />
      <div className='background-form'>
        <div className='background-form__header'>
          <label className='background-form__title'>To.</label>
          <input
            className='background-form__input'
            id='toInput'
            placeholder='받는 사람 이름을 입력해 주세요'
          />
        </div>
        <div className='background-form-group'>
          <p>배경화면을 선택해주세요.</p>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <ToggleOption />

        <button className='background-form__submit'>생성하기</button>
      </div>
    </>
  );
}
