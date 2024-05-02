import React, { useState } from 'react';
import '../../styles/headerPost/DropDownEmojis.scss';
import arrowDownIcon from '../../assets/icon/ic_arrow_down.svg';

function DropDownEmojis(props) {
  const emojiSets = [
    { emoji: '🥹', count: 20 },
    { emoji: '🤩', count: 15 },
    { emoji: '😊', count: 10 },
    { emoji: '🤫', count: 3 },
    { emoji: '😎', count: 30 },
    { emoji: '🥰', count: 24 },
  ];

  const topThreeEmojis = emojiSets.sort((a, b) => b.count - a.count).slice(0, 3);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='headerPost__dropdown-emojis-container'>
      <button className='headerPost__dropdown-button'>
        <div className='headerPost__popularemoji'>
          {topThreeEmojis.map((set, index) => (
            <span key={index} className='headerPost__emoji'>
              {set.emoji}
              {set.count}
            </span>
          ))}
        </div>
        <img
          src={arrowDownIcon}
          alt='Dropdown'
          className='headerPost__dropdown-icon'
          onClick={toggleDropDown}
        />
      </button>

      {isOpen && (
        <div className='headerPost__dropdown-menu'>
          {emojiSets.map((set, index) => (
            <div key={index} className='headerPost__emoji'>
              <span>{set.emoji}</span>
              <span>{set.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownEmojis;
