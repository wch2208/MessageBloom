import { useState } from 'react';
import '../styles/List/List.scss';
import ListCard from '../components/List/ListCard';
import list from '../mock-data.json';
import ArrowButton from '../components/List/ArrowButton';
import ic_arrow_left from './../assets/icon/ic_arrow_left.svg';
import ic_arrow_right from './../assets/icon/ic_arrow_right.svg';

export default function List() {
  const [data, setData] = useState(list.list);

  const getBestCards = () => {
    const sortedCards = [...data];
    sortedCards.sort((a, b) => b.messageCount - a.messageCount);
    return sortedCards.slice(0, 10);
  };

  const getLatestCards = () => {
    const sortedCards = [...data];
    sortedCards.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return sortedCards;
  };

  const bestCards = getBestCards();
  const latestCards = getLatestCards();

  const handleMove = () => {};

  return (
    <div className='list'>
      <div className='list__best'>
        <p className='list__best-title'>인기 롤링 페이퍼 🔥</p>
        <ArrowButton btnType={'left'}>
          {<img src={ic_arrow_left} alt='왼쪽으로 클릭'></img>}
        </ArrowButton>
        <div className='list__best-cards'>
          {bestCards.map((card) => (
            <ListCard key={card.id} {...card} />
          ))}
        </div>
        <ArrowButton btnType={'right'}>
          {<img src={ic_arrow_right} alt='오른쪽으로 클릭'></img>}
        </ArrowButton>
      </div>

      <div className='list__newest'>
        <p className='list__newest-title'>최근에 만든 롤링 페이퍼 ⭐️</p>
        <ArrowButton btnType={'left'}>
          {<img src={ic_arrow_left} alt='왼쪽으로 클릭'></img>}
        </ArrowButton>
        <div className='list__newest-cards'>
          {latestCards.map((card) => (
            <ListCard key={card.id} {...card} />
          ))}
        </div>
        <ArrowButton btnType={'right'}>
          {<img src={ic_arrow_right} alt='오른쪽으로 클릭'></img>}
        </ArrowButton>
      </div>

      <button className='list__create-btn'>나도 만들어보기</button>
    </div>
  );
}
