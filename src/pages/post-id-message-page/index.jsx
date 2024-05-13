import './PostIdMessage.scss';
import { postMessageToRecipient } from '../../apis/api';
import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { getFormData } from '../../components/post-id-message-page/messageConstants';
import RelationshipOptions from '../../components/post-id-message-page/RelationshipOptions';
import ContentTextarea from '../../components/post-id-message-page/ContentTextarea';
import ProfileOptions from '../../components/post-id-message-page/ProfileOptions';
import SenderInput from '../../components/post-id-message-page/SenderInput';
import FontOptions from '../../components/post-id-message-page/FontOptions';
import ButtonLink from '../../components/commons/button-link';

const isFontOption = (e) => {
  const firstChar = e.target.innerText[0];
  return firstChar === 'N' || firstChar === 'P' || firstChar === '나';
};

export default function PostIdMessage() {
  const scrollTarget = useRef(null);
  const senderInputRef = useRef();
  const profileOptionsRef = useRef();
  const relationshipOptionsRef = useRef();
  const contentTextareaRef = useRef();
  const fontOptionsRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState({
    sender: false,
    content: false,
  });

  const anyInvalid = Object.values(error).some((value) => !value);

  const scrollToBottom = (e) => {
    if (isFontOption(e)) {
      scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendMessage = async () => {
    const formData = getFormData(
      id,
      senderInputRef,
      profileOptionsRef,
      relationshipOptionsRef,
      contentTextareaRef,
      fontOptionsRef,
    );

    const newFormData = new FormData();
    newFormData.append('data', JSON.stringify(formData));
    await postMessageToRecipient(newFormData.get('data'), id);

    navigate(`/post/${id}`);
  };

  return (
    <div className='message-form' onClick={scrollToBottom}>
      <SenderInput ref={senderInputRef} setError={setError} />
      <ProfileOptions ref={profileOptionsRef} />
      <RelationshipOptions ref={relationshipOptionsRef} />
      <ContentTextarea ref={contentTextareaRef} setError={setError} />
      <FontOptions ref={fontOptionsRef} />
      <ButtonLink buttonText={'생성하기'} fullWidth onClick={sendMessage} disabled={anyInvalid} />
      <div ref={scrollTarget} style={{ marginTop: '160px' }} />
    </div>
  );
}
