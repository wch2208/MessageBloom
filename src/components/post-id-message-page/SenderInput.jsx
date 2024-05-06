import { useEffect } from 'react';
import './SenderInput.scss';
import { useForm } from 'react-hook-form';

export default function SenderInput({ setFormData }) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onChange',
  });

  const onChange = (e) => {
    setFormData((prevFromData) => ({ ...prevFromData, sender: e.target.value }));
  };

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <form className='message-form__sender'>
      <label htmlFor='nameInput' className='message-form__title'>
        From.
      </label>
      <input
        className={`message-form__inputs ${errors.nameInput && `message-form__inputs--error`}`}
        id='nameInput'
        placeholder='이름을 입력해 주세요.'
        autoComplete='off'
        autoFocus
        onChange={onChange}
        {...register('nameInput', { required: 'Name is required' })}
      />
      {errors.nameInput && (
        <p className='message-form__inputs--error'>{errors.nameInput.message}</p>
      )}
    </form>
  );
}
