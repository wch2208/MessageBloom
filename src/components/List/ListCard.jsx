import '../../styles/List/ListCard.scss';
import './ShowTheMostEmojis';
import ShowTheMostEmojis from './ShowTheMostEmojis';
import WritersProfiles from './WritersProfiles';

export default function ListCard() {
  return (
    <div className='list-card'>
      <div className='list-card__writers'>
        <p className='list-card__writers__to'>To.Sowon</p>
        <WritersProfiles />

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
