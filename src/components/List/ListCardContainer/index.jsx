import ListCard from '../ListCard/index';
import ArrowButton from '../ArrowButton/index';
import ic_arrow_left from '../../../assets/icon/ic_arrow_left.svg';
import ic_arrow_right from '../../../assets/icon/ic_arrow_right.svg';
import useFetchData from '../../../hooks/useFetchData';
import { useState, useEffect } from 'react';
import { getRecipients } from '../../../apis/api';
import list from '../../../recipients-mock.json';

const MAX_SCREEN_WIDTH = 1200;
const MAX_LIST_LENGTH = 8;
const LIMIT = 4;
const OFFSET = 0;
const SORT_LIKE = 'like';

import React from 'react';

export default function ListCardContainer() {
  const [mock, setMock] = useState(list.list);
  const [scrollable, setScrollable] = useState(false);
  const [limit, setLimit] = useState(LIMIT);
  const [offset, setOffset] = useState(OFFSET);

  const { data, error } = useFetchData(getRecipients, [LIMIT, OFFSET, SORT_LIKE]);

  useEffect(() => {
    updateScroll();
    window.addEventListener('resize', updateScroll);

    return () => window.removeEventListener('resize', updateScroll);
  });

  const updateScroll = () => {
    const smallScreen = document.documentElement.clientWidth < MAX_SCREEN_WIDTH;
    setScrollable(smallScreen);
    if (smallScreen) {
      setLimit(MAX_LIST_LENGTH);
      setOffset(OFFSET);
    } else {
      setLimit(LIMIT);
    }
  };

  return (
    <div>
      <ArrowButton btnType={'left'}>
        {<img src={ic_arrow_left} alt='왼쪽으로 클릭'></img>}
      </ArrowButton>
      <div className='list__best-cards'>
        {mock.map((card) => (
          <ListCard {...card} />
        ))}
      </div>
      <ArrowButton btnType={'right'}>
        {<img src={ic_arrow_right} alt='오른쪽으로 클릭'></img>}
      </ArrowButton>
    </div>
  );
}
