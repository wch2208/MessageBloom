import './Post.scss';
import ToggleOption from '../../components/post-page/ToggleOption';
import { useState } from 'react';
import { DEFAULT_RECIPIENT } from '../../components/post-page/postPageConstants';
import { postMessage } from '../../apis/api';
import { useNavigate } from 'react-router-dom';

export default function Post() {
  const [recipient, setRecipient] = useState(DEFAULT_RECIPIENT);
  const navigate = useNavigate();

  const navigateToNewPaper = (id) => {
    navigate(`/post/${id}`);
  };

  const handleCreateClick = async () => {
    const formData = new FormData();
    formData.append('data', JSON.stringify(recipient));
    const result = await postMessage(formData.get('data'));
    navigateToNewPaper(result.id);
  };

  const handleChange = (e) => {
    setRecipient({ ...recipient, name: e.target.value });
    //TODO: 유효성 검사 추가
  };

  return (
    <>
      <div className='background-form'>
        <div className='background-form__header'>
          <label className='background-form__title'>To.</label>
          <input
            className='background-form__input'
            id='toInput'
            placeholder='받는 사람 이름을 입력해 주세요'
            onChange={handleChange}
          />
        </div>
        <div className='background-form-group'>
          <p>배경화면을 선택해주세요.</p>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <ToggleOption setRecipient={setRecipient} />

        <button className='background-form__submit' onClick={handleCreateClick}>
          생성하기
        </button>
      </div>
    </>
  );
}
