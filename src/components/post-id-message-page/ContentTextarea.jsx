import './ContentTextarea.scss';
import { forwardRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function ContentTextarea({ setError }, contentTextareaRef) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({ mode: 'all' });

  useEffect(() => {
    setError((prev) => ({
      ...prev,
      content: !errors.content,
    }));
  }, [errors.content]);

  useEffect(() => {
    trigger('content');
  }, []);

  return (
    <div className='message-form__content'>
      <label htmlFor='textarea' className='message-form__title'>
        내용을 입력해 주세요
      </label>
      <textarea
        className='message-form__text-area'
        name='content'
        id='textarea'
        placeholder='좋은 추억이나 감사의 메세지를 작성해 주세요!'
        {...register('content', {
          required: '내용을 입력해주세요.',
          onChange: (e) => (contentTextareaRef.current = e.target.value),
        })}
      />
      {errors.content && <p className='form--error'>{errors.content.message}</p>}
    </div>
  );
}
export default forwardRef(ContentTextarea);
