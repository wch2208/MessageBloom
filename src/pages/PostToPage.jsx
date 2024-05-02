import '../styles/create-message-form/PostToPage.scss';
import checkIcon from '../assets/icon/ic_check.svg';
import { useState } from 'react';
import Header from '../components/header/Header';

export default function PostToPage() {
  const [selectedValue, setSelectedValue] = useState('color');
  const [selectedColor, setSelectedColor] = useState('orange');
  const [selectedImage, setSelectedImage] = useState('wallpaper01');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
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
        {selectedValue === 'color' ? (
          <div className='background-form__color-picker'>
            <input
              type='radio'
              id='orange'
              name='colors'
              value='orange'
              onChange={handleColorChange}
            />
            <label
              className={`background-form__radio-color-label ${
                selectedColor === 'orange' && 'background-form__radio-color--active'
              }`}
              htmlFor='orange'>
              <div
                className={`background-form__check-icon ${
                  selectedColor === 'orange' && 'background-form__radio-color--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
            <input
              type='radio'
              id='purple'
              name='colors'
              value='purple'
              onChange={handleColorChange}
            />
            <label
              className={`background-form__radio-color-label ${
                selectedColor === 'purple' && 'background-form__radio-color--active'
              }`}
              htmlFor='purple'>
              <div
                className={`background-form__check-icon ${
                  selectedColor === 'purple' && 'background-form__radio-color--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
            <input type='radio' id='blue' name='colors' value='blue' onChange={handleColorChange} />
            <label
              className={`background-form__radio-color-label ${
                selectedColor === 'blue' && 'background-form__radio-color--active'
              }`}
              htmlFor='blue'>
              <div
                className={`background-form__check-icon ${
                  selectedColor === 'blue' && 'background-form__radio-color--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
            <input
              type='radio'
              id='green'
              name='colors'
              value='green'
              onChange={handleColorChange}
            />
            <label
              className={`background-form__radio-color-label ${
                selectedColor === 'green' && 'background-form__radio-color--active'
              }`}
              htmlFor='green'>
              <div
                className={`background-form__check-icon ${
                  selectedColor === 'green' && 'background-form__radio-color--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
          </div>
        ) : (
          <div className='background-form__image-picker'>
            <input
              type='radio'
              id='wallpaper01'
              name='images'
              value='wallpaper01'
              onChange={handleImageChange}
            />
            <label
              className={`background-form__radio-image-label ${
                selectedImage === 'wallpaper01' && 'background-form__radio-image--active'
              }`}
              htmlFor='wallpaper01'>
              <div
                className={`${
                  selectedImage === 'wallpaper01' && 'background-form__radio-image--translucent'
                }`}></div>
              <div
                className={`background-form__check-icon ${
                  selectedImage === 'wallpaper01' && 'background-form__radio-image--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
            <input
              type='radio'
              id='wallpaper02'
              name='images'
              value='wallpaper02'
              onChange={handleImageChange}
            />
            <label
              className={`background-form__radio-image-label ${
                selectedImage === 'wallpaper02' && 'background-form__radio-image--active'
              }`}
              htmlFor='wallpaper02'>
              <div
                className={`${
                  selectedImage === 'wallpaper02' && 'background-form__radio-image--translucent'
                }`}
              />
              <div
                className={`background-form__check-icon ${
                  selectedImage === 'wallpaper02' && 'background-form__radio-image--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
            <input
              type='radio'
              id='wallpaper03'
              name='images'
              value='wallpaper03'
              onChange={handleImageChange}
            />
            <label
              className={`background-form__radio-image-label ${
                selectedImage === 'wallpaper03' && 'background-form__radio-image--active'
              }`}
              htmlFor='wallpaper03'>
              <div
                className={`${
                  selectedImage === 'wallpaper03' && 'background-form__radio-image--translucent'
                }`}
              />
              <div
                className={`background-form__check-icon ${
                  selectedImage === 'wallpaper03' && 'background-form__radio-image--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
            <input
              type='radio'
              id='wallpaper04'
              name='images'
              value='wallpaper04'
              onChange={handleImageChange}
            />
            <label
              className={`background-form__radio-image-label ${
                selectedImage === 'wallpaper04' && 'background-form__radio-image--active '
              }`}
              htmlFor='wallpaper04'>
              <div
                className={`${
                  selectedImage === 'wallpaper04' && 'background-form__radio-image--translucent'
                }`}
              />
              <div
                className={`background-form__check-icon ${
                  selectedImage === 'wallpaper04' && 'background-form__radio-image--active'
                }`}>
                <img src={checkIcon} alt='체크 아이콘' />
              </div>
            </label>
          </div>
        )}

        <button className='background-form__submit'>생성하기</button>
      </div>
    </>
  );
}
