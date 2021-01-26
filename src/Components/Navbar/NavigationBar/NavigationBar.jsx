/* eslint-disable react/style-prop-object */
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import Menus from '../Menus/Menus';
import SubmitForm from '../../Submit/SubmitForm';
import MenuIcon from '../../../Assets/SvgIcon/MenuIcon';
import SearchIcon from '../../../Assets/SvgIcon/SearchIcon';
import ExitIcon from '../../../Assets/SvgIcon/ExitIcon';
import Button from '../../buttons/Button';
import SearchInput from '../SearchInput/SearchInput';
import { NavContext } from '../../../Context/Nav/NavBarState';
import '../../../Styles/navbar.scss';
import ReactDOM from 'react-dom';
import Logo from '../../../Assets/Logo';

const NavBar = () => {
  const navContext = useContext(NavContext);
  const { onSubmitSearch } = navContext;

  const showNavOpts = useRef(null);
  const expandSearch = useRef(null);
  const selectSearch = useRef(null);

  const onShowOpts = () => {
    showNavOpts.current.classList.toggle('opts-block');
  };

  // On mobile functionality
  const onShowSearch = () => {
    showNavOpts.current.classList.remove('opts-block');
    expandSearch.current.classList.add('show-search');
    selectSearch.current.select();
  };

  // On mobile functionality
  const onHideSearch = () => {
    expandSearch.current.classList.remove('show-search');
  };

  return ReactDOM.createPortal(
    <div className="nav-header">
      <div className="nav-holder">
        <div className="nav-container">
          {/* NAV LOGO */}
          <div className="toggle-menu" onClick={onShowOpts}>
            <MenuIcon className="toggle-svg" />
          </div>
          <div className="logo-box">
            <Link to="/" className="logo">
              <Logo />
            </Link>
          </div>

          {/* NAV CENTER */}
          <div className="nav-center" ref={showNavOpts}>
            <Menus />
          </div>

          {/* NAV SEARCH */}
          <div className="nav-search">
            <SubmitForm formClass="search-form" onSubmit={onSubmitSearch}>
              {/* Desktop Search Input */}
              <SearchInput classNameArea="sm-input" />
              <Button type="submit">
                <SearchIcon />
              </Button>
            </SubmitForm>
          </div>

          <div className="toggle-search toggle-menu" onClick={onShowSearch}>
            <SearchIcon />
          </div>

          {/*  */}

          <div className="search-expand" ref={expandSearch}>
            <SubmitForm formClass="search-form" onSubmit={onSubmitSearch}>
              <Button type="submit" className="icon-box">
                <SearchIcon />
              </Button>

              {/* Mobile Search Input */}
              <SearchInput classNameArea="lg-input" refValue={selectSearch} />

              <div className="icon-box" onClick={onHideSearch}>
                <ExitIcon className="ex-icon" />
              </div>
            </SubmitForm>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('mn-header-component')
  );
};

export default NavBar;
