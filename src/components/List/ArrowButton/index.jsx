import React from 'react';
import './ArrowButton.scss';

import ic_arrow_left from '../../../assets/icon/ic_arrow_left.svg';
import ic_arrow_right from '../../../assets/icon/ic_arrow_right.svg';

export function ArrowButtonLeft() {
  return (
    <button className='arrow-button left'>
      <img src={ic_arrow_left} alt='왼쪽으로 클릭'></img>
    </button>
  );
}

export function ArrowButtonRight() {
  return (
    <button className='arrow-button right'>
      <img src={ic_arrow_right} alt='왼쪽으로 클릭'></img>
    </button>
  );
}
