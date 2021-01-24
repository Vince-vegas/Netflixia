import React from 'react';
import { Link } from 'react-router-dom';

const Menus = () => {
  return (
    <div className="nav-center">
      <div className="nav-menu">
        <li className="nav-list">
          <Link className="nav-link" to="/home/1">
            Home
          </Link>
        </li>
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
