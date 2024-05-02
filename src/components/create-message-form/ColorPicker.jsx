import { useState } from 'react';
import checkIcon from '../../assets/icon/ic_check.svg';
import '../../styles/create-message-form/ColorPicker.scss';

function ColorOption({ handleColorChange, colorName, selectedColor }) {
  return (
    <>
      <input
        type='radio'
        id={colorName}
        name='colors'
        value={colorName}
        onChange={handleColorChange}
      />
      <label
        className={`background-form__radio-color-label ${
          selectedColor === `${colorName}` && 'background-form__radio-color--active'
        }`}
        htmlFor={colorName}>
        <div
          className={`background-form__check-icon ${
            selectedColor === `${colorName}` && 'background-form__radio-color--active'
          }`}>
          <img src={checkIcon} alt='체크 아이콘' />
        </div>
      </label>
    </>
  );
}

export default function ColorPicker() {
  const colorNames = ['orange', 'purple', 'blue', 'green'];
  const [selectedColor, setSelectedColor] = useState(colorNames[0]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className='background-form__color-picker'>
      {colorNames.map((colorName, i) => (
        <ColorOption
          key={i}
          handleColorChange={handleColorChange}
          colorName={colorName}
          selectedColor={selectedColor}
        />
      ))}
    </div>
  );
}
