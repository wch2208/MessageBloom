import '../styles/create-message-form/PostToPage.scss';
import { useState } from 'react';
import ColorPicker from '../components/create-message-form/ColorPicker';
import ImagePicker from '../components/create-message-form/ImagePicker';

export default function PostToPage() {
  const [selectedValue, setSelectedValue] = useState('color');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
          />
        </div>
        <div className='background-form-group'>
          <p>배경화면을 선택해주세요.</p>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <div className='background-form__radio-group'>
          <label
            className={`background-form__radio-label ${
              selectedValue === 'color' && 'background-form__radio--active'
            }`}
            htmlFor='color'>
            컬러
          </label>
          <input
            className='background-form__radio'
            type='radio'
            id='color'
            name='background'
            value='color'
            onChange={handleChange}
          />
          <label
            className={`background-form__radio-label ${
              selectedValue === 'image' && 'background-form__radio--active'
            }`}
            htmlFor='image'>
            이미지
          </label>
          <input
            className='background-form__radio'
            type='radio'
            id='image'
            name='background'
            value='image'
            onChange={handleChange}
          />
        </div>
        {selectedValue === 'color' ? <ColorPicker /> : <ImagePicker />}

        <button className='background-form__submit'>생성하기</button>
      </div>
    </>
  );
}
