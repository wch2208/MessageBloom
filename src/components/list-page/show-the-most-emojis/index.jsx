import { BsDatabaseDash } from 'react-icons/bs';
import { getReactions } from '../../../apis/api';
import useFetchData from '../../../hooks/useFetchData';
import './ShowTheMostEmojis.scss';
import { useState, useEffect } from 'react';

export default function ShowTheMostEmojis({ id }) {
  const { results, error } = useFetchData(getReactions, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='list-card__emoji-container'>
      {results.length > 0 && <div className='list-card__emoji-divider'></div>}
      <div className='list-card__emoji-wrap'>
        {results.slice(0, 3).map((item, index) => (
          <div key={index} className='list-card__emoji'>
            <span>{item.emoji}</span>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
