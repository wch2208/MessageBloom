import './Post.scss';
import ToggleOption from '../../components/post-page/ToggleOption';
import { useState } from 'react';
import { DEFAULT_RECIPIENT } from '../../components/post-page/postPageConstants';
import { postRecipient } from '../../apis/api';
import { useNavigate } from 'react-router-dom';
import LinkButton from '../../components/commons/LinkButton';
import Header from '../../components/header/Header';

export default function Post() {
  const [recipient, setRecipient] = useState(DEFAULT_RECIPIENT);
  const navigate = useNavigate();

  const handleCreateClick = async () => {
    const formData = new FormData();
    formData.append('data', JSON.stringify(recipient));
    const { id } = await postRecipient(formData.get('data'));
    navigate(`/post/${id}`);
  };

  const handleChange = (e) => {
    setRecipient({ ...recipient, name: e.target.value });
    //TODO: 유효성 검사 추가
  };

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
            onChange={handleChange}
            autoFocus
            autoComplete='off'
          />
        </div>
        <div className='background-form-group'>
          <p>배경화면을 선택해주세요.</p>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <ToggleOption setRecipient={setRecipient} />
        <LinkButton buttonText={'생성하기'} onClick={handleCreateClick} fullWidth />
      </div>
    </>
  );
}
