import './List.scss';
import ListCardContainer from '../../components/List/ListCardContainer/index';

export default function List() {
  return (
    <div className='list'>
      <div className='list__best'>
        <p className='list__best-title'>인기 롤링 페이퍼 🔥</p>
        <ListCardContainer sort='like' />
      </div>

      <div className='list__newest'>
        <p className='list__newest-title'>최근에 만든 롤링 페이퍼 ⭐️</p>
        <ListCardContainer sort='like' />
      </div>

      <button className='list__create-btn'>나도 만들어보기</button>
    </div>
  );
}
