import React from 'react';
import NavBar from '../Components/Navbar/NavigationBar/NavigationBar';
import NavBarState from '../Context/Nav/NavBarState';

const NavBarContent = () => (
  <NavBarState>
    <NavBar />
  </NavBarState>
);

export default NavBarContent;
