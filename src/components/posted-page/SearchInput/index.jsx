import React, { useState, useRef } from 'react';
import './SearchInput.scss';
import ArrowIcon from '../../../assets/icon/ic_arrow_down.svg';

function SearchInput(props) {
  const [isSearchCategoryOpen, setIsSearchCategoryOpen] = useState(false);
  const [searchCategory, setSearchCategroy] = useState('전체');

  const handleSearchCategory = (e) => {
    const { textContent } = e.target;
    setSearchCategroy(textContent);
    setIsSearchCategoryOpen(false);
  };

  return (
    <div className='search-container'>
      <div className='search-container__dropdown'>
        <div
          className='search-container__dropdown-menu'
          onClick={() => setIsSearchCategoryOpen(!isSearchCategoryOpen)}>
          {searchCategory}
          <img
            className={
              isSearchCategoryOpen
                ? 'search-container__dropdown-menu-img-active'
                : 'search-container__dropdown-menu-img'
            }
            src={ArrowIcon}
            alt=' 검색창 드롭다운 화살표 아이콘'
          />
        </div>
        {isSearchCategoryOpen && (
          <div className='search-container__dropdown-menubar'>
            <div className='search-container__dropdown-menubar-all' onClick={handleSearchCategory}>
              전체
            </div>
            <div className='search-container__dropdown-menubar-name' onClick={handleSearchCategory}>
              이름
            </div>
            <span
              className='search-container__dropdown-menubar-content'
              onClick={handleSearchCategory}>
              내용
            </span>
          </div>
        )}
      </div>

      <label htmlFor='search-input'></label>
      <input type='text' id='serach-input' className='search-container__input' />
    </div>
  );
}

export default SearchInput;
