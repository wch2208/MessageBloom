import checkIcon from '../../assets/icon/ic_check.svg';
import { useState } from 'react';
import '../../styles/create-message-form/ImagePicker.scss';

function ImageOption({ handleImageChange, imageName, selectedImage }) {
  return (
    <>
      <input
        type='radio'
        id={imageName}
        name='images'
        value={imageName}
        onChange={handleImageChange}
      />
      <label
        className={`background-form__radio-image-label ${
          selectedImage === `${imageName}` && 'background-form__radio-image--active'
        }`}
        htmlFor={imageName}>
        <div
          className={`${
            selectedImage === `${imageName}` && 'background-form__radio-image--translucent'
          }`}></div>
        <div
          className={`background-form__check-icon ${
            selectedImage === `${imageName}` && 'background-form__radio-image--active'
          }`}>
          <img src={checkIcon} alt='체크 아이콘' />
        </div>
      </label>
    </>
  );
}

export default function ImagePicker() {
  const imageNames = ['wallpaper01', 'wallpaper02', 'wallpaper03', 'wallpaper04'];
  const [selectedImage, setSelectedImage] = useState(imageNames[0]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };
  return (
    <div className='background-form__image-picker'>
      {imageNames.map((imageName, i) => (
        <ImageOption
          key={i}
          handleImageChange={handleImageChange}
          imageName={imageName}
          selectedImage={selectedImage}
        />
      ))}
    </div>
  );
}
