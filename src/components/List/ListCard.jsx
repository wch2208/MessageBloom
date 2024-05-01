import '../../styles/List/ListCard.scss';
import './ShowTheMostEmojis';
import ShowTheMostEmojis from './ShowTheMostEmojis';

export default function ListCard() {
  return (
    <div className='list-card'>
      <div className='list-card__writers'>
        <p className='list-card__writers__to'>To.Sowon</p>
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

        <div className='list-card__text'>
          <span>30</span>명이 작성했어요!
        </div>
      </div>

      <div className='list-card__emoji-container'>
        <div className='list-card__divider'></div>
        <ShowTheMostEmojis />
      </div>
    </div>
  );
}
