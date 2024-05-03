import React, { useState, useEffect } from 'react';
import '../../styles/headerPost/DropDownEmojis.scss';
import arrowDownIcon from '../../assets/icon/ic_arrow_down.svg';
import addicon from '../../assets/icon/ic_add_20.svg';

function DropDownEmojis() {
  const emojiSets = [
    { emoji: '🥹', count: 20 },
    { emoji: '🤩', count: 15 },
    { emoji: '😊', count: 10 },
    { emoji: '🤫', count: 3 },
    { emoji: '🤫', count: 25 },
    { emoji: '🤫', count: 9 },
    { emoji: '😎', count: 30 },
    { emoji: '🥰', count: 24 },
    { emoji: '🥰', count: 27 },
    { emoji: '🥰', count: 5 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [maxIcons, setMaxIcons] = useState(6);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setMaxIcons(6);
      } else {
        setMaxIcons(8);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const topEmojis = emojiSets
    .slice(0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 3);

  return (
    <div className='headerPost__dropdown-emojis-container'>
      <button className='headerPost__dropdown-button'>
        <div className='headerPost__popularemoji'>
          {topEmojis.map((set, index) => (
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
        <div className='headerPost__emoji-dropdown-menu'>
          {emojiSets
            .slice(0)
            .sort((a, b) => b.count - a.count)
            .slice(0, maxIcons)
            .map((set, index) => (
              <div key={index} className='headerPost__emoji-dropdown'>
                <span>{set.emoji}</span>
                <span>{set.count}</span>
              </div>
            ))}
        </div>
      )}
      <button className='headerPost__post-btn'>
        <img src={addicon} alt='이모지추가' />
        <span style={{ display: windowWidth >= 768 ? 'inline' : 'none' }}>추가</span>
      </button>
    </div>
  );
}

export default DropDownEmojis;
