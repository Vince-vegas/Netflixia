import React from 'react';
import { Link } from 'react-router-dom';

const GenresList = ({ genres }) => {
  return (
    <li className="nav-list">
      <span className="nav-link nav-link-opts">
        <span className="nav-link text-opt">Genre</span>
        <div className="opts-box">
          <ul className="navopts-menu">
            {genres.map(({ id, name }) => {
              return (
                <li key={id} className="opt-list">
                  <Link to={`/genre/${id}`} className="opt-link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </span>
    </li>
  );
};

export default GenresList;
