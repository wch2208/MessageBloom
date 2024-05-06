import React, { useState } from 'react';
import './SearchInput.scss';
import arrowicon from '../../../assets/icon/ic_arrow_down.svg';
import searchicon from '../../../assets/icon/ic_search.svg';

function SearchInput({ setSearchInfo }) {
  const [isSearchCategoryOpen, setIsSearchCategoryOpen] = useState(false);
  const [searchCategory, setSearchCategroy] = useState('전체');

  const handleSearchCategory = (e) => {
    const { textContent } = e.target;
    setSearchCategroy(textContent);
    setIsSearchCategoryOpen(false);
  };

  const handleSearchInput = (e) => {
    if (e.key === 'Enter') {
      const { value } = e.target;
      setSearchInfo(searchCategory, value);
    }
  };

  const resetSearchValue = (e) => {
    const { value } = e.target;
    if (value === '') {
      setSearchInfo(searchCategory, value);
    }
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
            src={arrowicon}
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
      <input
        type='text'
        id='search-input'
        className='search-container__input'
        onKeyDown={handleSearchInput}
        onChange={resetSearchValue}
      />
      <button className='search-container__btn'>
        <img className='search-container__btn-img' src={searchicon} alt='검색창 버튼 아이콘' />
        <span className='search-container__btn-word'>검색</span>
      </button>
    </div>
  );
}

export default SearchInput;
