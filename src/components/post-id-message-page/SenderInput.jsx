import './SenderInput.scss';

export default function SenderInput({ setFormData }) {
  const handleNameChange = (e) => {
    setFormData((prevFromData) => ({ ...prevFromData, sender: e.target.value }));
    //TODO: 유효성 검사
  };

  return (
    <div className='message-form__sender'>
      <label htmlFor='nameInput' className='message-form__title'>
        From.
      </label>
      <input
        className='message-form__inputs'
        id='nameInput'
        placeholder='이름을 입력해 주세요.'
        onChange={handleNameChange}
        autoComplete='off'
        autoFocus
      />
    </div>
  );
}
