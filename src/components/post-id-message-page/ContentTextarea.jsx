import '@toast-ui/editor/dist/toastui-editor.css';
import './ContentTextarea.scss';
import { forwardRef, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';

function ContentTextarea({ setError }, contentTextareaRef) {
  const ref = useRef(null);
  const {
    register,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({ mode: 'all' });

  useEffect(() => {
    register('content', { required: '내용을 입력해주세요.' });
  }, [register]);

  useEffect(() => {
    setError((prev) => ({
      ...prev,
      content: !errors.content,
    }));
  }, [errors.content]);

  useEffect(() => {
    trigger('content');
  }, []);

  useEffect(() => {
    setError((prev) => ({
      ...prev,
      content: !errors.content,
    }));
  }, [errors.content, setError]);

  const getEditorContent = () => {
    const editorInstance = ref.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    setValue('content', markdownContent, { shouldValidate: true });
    contentTextareaRef.current = markdownContent;
  };

  return (
    <div className='message-form__content'>
      <label htmlFor='textarea' className='message-form__title'>
        내용을 입력해 주세요
      </label>
      <Editor
        id='textarea'
        height='400px'
        initialEditType='wysiwyg'
        placeholder='좋은 추억이나 감사의 메세지를 작성해 주세요!'
        ref={ref}
        onChange={getEditorContent}
        hideModeSwitch={true}
      />
      {errors.content && <p className='form--error'>{errors.content.message}</p>}
    </div>
  );
}
export default forwardRef(ContentTextarea);
