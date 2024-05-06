import React, { useState, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './DropDownEmojis.scss';
import arrowDownIcon from '../../../assets/icon/ic_arrow_down.svg';
import addicon20 from '../../../assets/icon/ic_add_20.svg';
import addicon24 from '../../../assets/icon/ic_add_24.svg';

export default function DropDownEmojis() {
  const [emojiSets, setEmojiSets] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [maxIcons, setMaxIcons] = useState(6);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width < 1200) {
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

  const topEmojis = emojiSets.sort((a, b) => b.count - a.count).slice(0, 3);

  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (emojiData) => {
    setEmojiSets((prevEmojiSets) => {
      const existingEmoji = prevEmojiSets.find((set) => set.emoji === emojiData.emoji);
      if (existingEmoji) {
        return prevEmojiSets.map((set) =>
          set.emoji === emojiData.emoji ? { ...set, count: set.count + 1 } : set,
        );
      } else {
        const newEmojiSet = {
          id: emojiData.unified,
          recipientId: 1,
          emoji: emojiData.emoji,
          count: 1,
        };
        return [...prevEmojiSets, newEmojiSet];
      }
    });
  };

  const togglePicker = () => {
    setShowPicker((prevState) => !prevState);
  };

  const addicon = windowWidth >= 767 ? addicon24 : addicon20;

  return (
    <div className='headeremojis'>
      <div className='headeremojis-container'>
        <button className='headeremojis-container__dropdown'>
          <div>
            {topEmojis.length === 0 && (
              <div className='headeremojis-container__dropdown__no-data'>
                <span>당신의 반응을 남겨주세요!</span>
              </div>
            )}
          </div>
          <div className='headeremojis-container__dropdown__popular'>
            {topEmojis.map((set, index) => (
              <span key={index} className='headeremojis-container__dropdown__popular-emoji'>
                {set.emoji}
                {set.count}
              </span>
            ))}
          </div>
          <img
            src={arrowDownIcon}
            alt='Dropdown'
            className='headeremojis-container__dropdown-icon'
            onClick={toggleDropDown}
          />
        </button>

        {isOpen && (
          <div className='headeremojis-container__dropdown-container'>
            <div className='headeremojis-container__dropdown-container_menu'>
              {emojiSets
                .slice(0)
                .sort((a, b) => b.count - a.count)
                .slice(0, maxIcons)
                .map((set, index) => (
                  <div
                    key={index}
                    className='headeremojis-container__dropdown-container_menu-emoji'>
                    <span>{set.emoji}</span>
                    <span>{set.count}</span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <button
          className='headeremojis__add-btn'
          onClick={togglePicker}
          style={{ cursor: 'pointer' }}>
          <img src={addicon} className='headeremojis__add-btn-icon' alt='이모지추가' />
          <span
            className='headeremojis__add-btn-text'
            style={{ display: windowWidth >= 768 ? 'inline' : 'none' }}>
            추가
          </span>
        </button>
        <div className='headeremojis__emojipicker'>
          {showPicker && (
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              className='headeremojis__emojipicker-container'
              width={300}
              height={500}
            />
          )}
        </div>
      </div>
    </div>
  );
}
