import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../../../Context/Nav/NavBarState';

const Menus = () => {
  const navContext = useContext(NavContext);
  const { genres } = navContext;

  // if the user go to small devices the opts-block class will be deleted
  const onRemoveOpts = (e) => {
    e.target.offsetParent.offsetParent.offsetParent.classList.remove(
      'opts-block'
    );
  };

  // if the user go to small devices the opts-block class will be deleted
  const removeOpts = (e) => {
    e.target.offsetParent.classList.remove('opts-block');
  };

  return (
    <ul className="nav-menu">
      <li className="nav-list">
        <Link className="nav-link" to="/home" onClick={removeOpts}>
          Home
        </Link>
      </li>
      <li className="nav-list">
        <span className="nav-link nav-link-opts">
          <span className="nav-link text-opt">Genre</span>
          <div className="opts-box">
            <ul className="navopts-menu">
              {genres.map(({ id, name }) => {
                return (
                  <li key={id} className="opt-list">
                    <Link
                      onClick={onRemoveOpts}
                      to={`/genre/${id}`}
                      className="opt-link"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </span>
      </li>
      <li className="nav-list">
        <Link className="nav-link" to="/actors" onClick={removeOpts}>
          People
        </Link>
      </li>
    </ul>
  );
};

export default React.memo(Menus);
