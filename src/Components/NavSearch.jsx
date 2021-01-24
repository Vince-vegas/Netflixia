import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '../Assets/SvgIcon/SearchIcon';

const NavSearch = () => {
  let history = useHistory();
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();

    history.push(`/search?q=${searchVal}`);
    setSearchVal('');
  };

  return (
    <div className="nav-search">
      <form className="search-form" onSubmit={onSubmitSearch}>
        <div className="search-input">
          <input
            name="name"
            type="text"
            placeholder="Search movies...."
            autoComplete="off"
            className="sm-input"
            // ref={refValue}
            value={searchVal}
            onChange={handleSearch}
            // onKeyPress={onSearchInput}
          />
        </div>
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default NavSearch;
