import './ContentTextarea.scss';

export default function ContentTextarea({ setFormData }) {
  const handleChange = (e) => {
    setFormData((prevFormData) => ({ ...prevFormData, content: e.target.value }));
  };

  return (
    <div className='message-form__content'>
      <label htmlFor='textarea' className='message-form__title'>
        내용을 입력해 주세요
      </label>
      <textarea
        className='message-form__text-area'
        name='content'
        id='textarea'
        placeholder='I am your reach text editor.'
        onChange={handleChange}></textarea>
    </div>
  );
}
