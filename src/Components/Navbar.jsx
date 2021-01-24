import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo';
import '../Styles/navbar.scss';
import Menus from './Menus';
import NavSearch from './NavSearch';

const Navbar = () => {
  return (
    <div className="nav-header">
      <div className="nav-holder">
        <div className="nav-container">
          {/* LOGO COM */}
          <div className="logo-box">
            <Link to="/" className="logo">
              <Logo />
            </Link>
          </div>
          {/*  */}

          {/* MENUS */}
          <Menus />
          {/*  */}

          <NavSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
