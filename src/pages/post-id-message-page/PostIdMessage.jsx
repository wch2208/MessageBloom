import './PostIdMessage.scss';
import { useState, useRef } from 'react';
import { postMessageToRecipient } from '../../apis/api';
import { initialFormData } from '../../components/post-id-message-page/messageConstants';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileOptions from '../../components/post-id-message-page/ProfileOptions';
import RelationshipOptions from '../../components/post-id-message-page/RelationshipOptions';
import SenderInput from '../../components/post-id-message-page/SenderInput';
import ContentTextarea from '../../components/post-id-message-page/ContentTextarea';
import FontOptions from '../../components/post-id-message-page/FontOptions';
import LinkButton from '../../components/commons/LinkButton';

const isFontOption = (e) => {
  const firstChar = e.target.innerText[0];
  return firstChar === 'N' || firstChar === 'P' || firstChar === '나';
};

const scrollToBottom = (e) => {
  if (isFontOption(e)) {
    scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function PostIdMessage() {
  const navigate = useNavigate();
  const scrollTarget = useRef(null);
  const { id } = useParams();
  const [formData, setFormData] = useState(initialFormData(id));

  const sendMessage = async () => {
    const newFormData = new FormData();
    newFormData.append('data', JSON.stringify(formData));
    await postMessageToRecipient(newFormData.get('data'), id);
    navigate(`/post/${id}`);
  };

  return (
    <div className='message-form' onClick={scrollToBottom}>
      <SenderInput setFormData={setFormData} />
      <ProfileOptions formData={formData} setFormData={setFormData} />
      <RelationshipOptions setFormData={setFormData} />
      <ContentTextarea setFormData={setFormData} />
      <FontOptions setFormData={setFormData} />
      <LinkButton buttonText={'생성하기'} fullWidth onClick={sendMessage} />
      <div ref={scrollTarget} style={{ marginTop: '160px' }} />
    </div>
  );
}
