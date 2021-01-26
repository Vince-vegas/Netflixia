import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import GenresList from './GenresList';

const Menus = () => {
  const { genres, showGenres } = useSelector((state) => state.navHandlers);

  return (
    <div className={showGenres ? 'nav-center opts-block' : 'nav-center'}>
      <div className="nav-menu">
        <li className="nav-list">
          <Link className="nav-link" to="/home/1">
            Home
          </Link>
        </li>
        <GenresList genres={genres} />
        <li className="nav-list">
          <Link className="nav-link" to="/actors">
            People
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Menus;
