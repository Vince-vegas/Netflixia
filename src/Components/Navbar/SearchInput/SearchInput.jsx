import React, { useContext } from 'react';
import { NavContext } from '../../../Context/Nav/NavBarState';
// import { SearchContext } from '../../../Context/SearchMovie/SearchState';

const SearchInput = ({ classNameArea, refValue }) => {
  const navContext = useContext(NavContext);
  const { searchInput, onSearchInput } = navContext;

  return (
    <div className="search-input">
      <input
        name="name"
        type="text"
        placeholder="Search movies...."
        autoComplete="off"
        className={classNameArea}
        value={searchInput}
        ref={refValue}
        onChange={onSearchInput}
        onKeyPress={onSearchInput}
      />
    </div>
  );
};

export default SearchInput;
