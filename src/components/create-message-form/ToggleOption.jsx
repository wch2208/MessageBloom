import { useState } from 'react';
import ColorPicker from '../create-message-form/ColorPicker';
import ImagePicker from '../create-message-form/ImagePicker';
import '../../styles/create-message-form/ToggleOption.scss';

export default function ToggleOption() {
  const [selectedValue, setSelectedValue] = useState('color');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
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
    </>
  );
}
