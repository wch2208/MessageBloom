import './ListCard.scss';
import ShowTheMostEmojis from '../ShowTheMostEmoji';
import WritersProfiles from '../WritersProfile';
import { useState, useEffect } from 'react';

export default function ListCard({ name, backgroundColor, backgroundImageURL, messageCount }) {
  const [background, setBackground] = useState('');

  useEffect(() => {
    backgroundColor.length > 0 ? setBackground(backgroundColor) : setBackground(backgroundImageURL);
  }, [backgroundColor, backgroundImageURL]);

  return (
    <div className={`list-card ${background ? `--${background}` : ''}`}>
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
