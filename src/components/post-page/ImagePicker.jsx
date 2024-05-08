import checkIcon from '../../assets/icon/ic_check.svg';
import { useState } from 'react';
import './ImagePicker.scss';
import { IMAGE_NAMES, IMAGE_URLS } from './postPageConstants';
import ImageAddModal from './image-add-modal';

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

export default function ImagePicker({ setRecipient }) {
  const [selectedImage, setSelectedImage] = useState('');
  const [customImg, setCustomImg] = useState();
  const [handleModalOpen, setHandleModalOpen] = useState(false);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
    setRecipient((prev) => ({ ...prev, backgroundImageURL: IMAGE_URLS[e.target.value] }));
  };

  const handleCustomClick = (e) => {
    //
    setHandleModalOpen(true);
  };

  return (
    <div className='background-form__image-picker'>
      {IMAGE_NAMES.map((imageName, i) => (
        <ImageOption
          key={i}
          handleImageChange={handleImageChange}
          imageName={imageName}
          selectedImage={selectedImage}
        />
      ))}
      {customImg ? (
        <div
          className='background-form__custom-image'
          style={{
            backgroundImage: `url(${customImg})`,
          }}
        />
      ) : (
        <button onClick={handleCustomClick} className='background-form__add-image-btn'>
          이미지 직접 추가하기
        </button>
      )}

      {handleModalOpen && (
        <ImageAddModal
          setCustomImg={setCustomImg}
          setRecipient={setRecipient}
          setHandleModalOpen={setHandleModalOpen}
        />
      )}
    </div>
  );
}
