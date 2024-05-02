import React from 'react';
import '../../styles/List/WritersProfiles.scss';

export default function WritersProfiles() {
  return (
    <div className='list-card__writers__profiles'>
      <div className='list-card__writers__profiles-img'>
        <img
          className='list-card__writers__profiles-img1'
          src='https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg'
          alt='이미지'
        />
      </div>
      <div className='list-card__writers__profiles-img'>
        <img
          className='list-card__writers__profiles-img2'
          src='https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg'
          alt='이미지'
        />
      </div>
      <div className='list-card__writers__profiles-img'>
        <img
          className='list-card__writers__profiles-img3'
          src='https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg'
          alt='이미지'
        />
      </div>
      <div className='list-card__writers__profiles-count'>+27</div>
    </div>
  );
}
