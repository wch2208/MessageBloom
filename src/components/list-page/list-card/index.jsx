import './ListCard.scss';
import ShowTheMostEmojis from '../show-the-most-emojis';
import WritersProfiles from '../writers-profiles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WriterCounter from '../../commons/WriterCounter.jsx';

export default function ListCard({ name, backgroundColor, backgroundImageURL, messageCount, id }) {
  const nav = useNavigate();

  const baseColor = backgroundImageURL ? 'white' : '';
  const background = backgroundImageURL ? `url(${backgroundImageURL})` : {};

  return (
    <div
      className={`list-card ${`--${backgroundColor}`}`}
      style={{
        backgroundImage: `${background}`,
        color: `${baseColor}`,
      }}
      onClick={() => nav(`/post/${id}`)}>
      <div className='list-card__writers'>
        <p className='list-card__writers__to'>To.{name}</p>
        <WriterCounter id={id} displayOption='vertical' />
      </div>
      <div>
        <ShowTheMostEmojis id={id} />
      </div>
    </div>
  );
}
