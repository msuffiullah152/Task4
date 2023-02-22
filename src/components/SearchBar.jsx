import React, { useState } from 'react';

const SearchBar = ({ search, setSearch, maxLength, setMaxLength, setMovies, movies }) => {
  const [sortDir, setDir] = useState('asc');
  const [clickCount, setClickCount] = useState(0);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const maxLengthHandler = (e) => {
    setMaxLength(e.target.value);
  };

  const handleSort = () => {
    let sortedMovies = [...movies];
    let newSortDir = sortDir;
    if (clickCount % 2 === 0) {
      sortedMovies.sort((a, b) => a.length - b.length);
      newSortDir = 'asc';
    } else {
      sortedMovies.sort((a, b) => b.length - a.length);
      newSortDir = 'desc';
    }
    setClickCount(clickCount + 1);
    setDir(newSortDir);
    setMovies(sortedMovies);
  };

  return (
    <>
      <label htmlFor='search'>Search Query</label>
      <input type='text' name='search' onChange={searchHandler} value={search} />
      <label htmlFor='max-length'>Max Length</label>
      <input type='number' name='max-length' onChange={maxLengthHandler} value={maxLength} />
      <button onClick={handleSort}>
        {sortDir === 'asc' ? 'Sort by length (ASC)' : 'Sort by length (DESC)'}
      </button>
    </>
  );
};

export default SearchBar;
