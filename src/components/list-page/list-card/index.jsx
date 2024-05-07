import './ListCard.scss';
import ShowTheMostEmojis from '../show-the-most-emojis';
import WritersProfiles from '../writers-profiles';
import { useState, useEffect } from 'react';

export default function ListCard({ name, backgroundColor, backgroundImageURL, messageCount }) {
  const [backgroundStyle] = useState(
    backgroundImageURL ? { backgroundImage: `url(${backgroundImageURL})`, color: '#fff' } : {},
  );

  return (
    <div className={`list-card ${`--${backgroundColor}`}`} style={backgroundStyle}>
      <div className='list-card__writers'>
        <p className='list-card__writers__to'>To.{name}</p>
        <WritersProfiles />

        <div className='list-card__text'>
          <span>{messageCount}</span>명이 작성했어요!
        </div>
      </div>

      <div className='list-card__emoji-container'>
        <div className='list-card__divider'></div>
        <ShowTheMostEmojis />
      </div>
    </div>
  );
}
