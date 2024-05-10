import './ListCardContainer.scss';
import ListCard from '../list-card/index';
import { ArrowButtonLeft, ArrowButtonRight } from '../arrow-button/index';
import useFetchData from '../../../hooks/useFetchData';
import { useState, useEffect } from 'react';
import { getRecipients } from '../../../apis/api';
import { constants } from '../../../utils/posted-page/constants';

export default function ListCardContainer({ sortLike }) {
  const [scroll, setScroll] = useState(false);
  const [limit, setLimit] = useState(constants.LIMIT);
  const [offset, setOffset] = useState(constants.OFFSET);

  const { data, error } = useFetchData(getRecipients, [limit, offset, sortLike]);

  useEffect(() => {
    updateScroll();
    window.addEventListener('resize', updateScroll);

    return () => window.removeEventListener('resize', updateScroll);
  });

  const updateScroll = () => {
    const smallScreen = document.documentElement.clientWidth < constants.MAX_SCREEN_WIDTH;
    setScroll(smallScreen);
    if (smallScreen) {
      setLimit(constants.MAX_LIST_LENGTH);
      setOffset(constants.OFFSET);
    } else {
      setLimit(constants.LIMIT);
    }
  };

  const handlePrevious = () => {
    setOffset(offset - 1);
  };

  const handleNext = () => {
    setOffset(offset + 1);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {!scroll && offset > 0 && <ArrowButtonLeft onClick={handlePrevious} />}
      {!scroll && offset < 12 && <ArrowButtonRight onClick={handleNext} />}
      <div className='list__best-cards'>
        {data && data.map((card) => <ListCard key={card.id} {...card} />)}
      </div>
    </>
  );
}
