import '../styles/create-message-form/MessageBackgroundForm.scss';

export default function MessageBackgroundForm() {
  return (
    <>
      <div class='background-form'>
        <div class='background-form__header'>
          <label class='background-form__title'>To.</label>
          <input
            class='background-form__input'
            id='toInput'
            placeholder='받는 사람 이름을 입력해 주세요'
          />
        </div>
        <div class='background-form-group'>
          <input type='text' class='background-form' placeholder='이미지' />
        </div>
        <div class='background-form-group'>
          <button class='background-form'>검색</button>
        </div>
        <div class='background-form-selector'>
          <div class='background-form-option background-form-option--selected'></div>
          <div class='background-form-option'></div>
          <div class='background-form-option'></div>
          <div class='background-form-option'></div>
        </div>
        <button class='background-form-button'>생성하기</button>
      </div>
    </>
  );
}
