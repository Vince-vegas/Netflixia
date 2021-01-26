import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

export const NavContext = React.createContext();

// THE HANDLER OF SEARCHING IS ON STORE FOLDER || REDUX

// THIS PROVIDER IS THE HANDLER OF NAVIGATION BAR
// Entities and Functions for DOM actions

const NavProvider = (props) => {
  const [genres, setGenres] = useState([
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ]);

  const [showGenres, setShowGenres] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const onShowOpts = () => {
    setShowGenres(!showGenres);
  };

  const onShowMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  return (
    <NavContext.Provider
      value={{
        genres,
        showMobileSearch,
        showGenres,
        onShowOpts,
        onShowMobileSearch,
        setGenres,
      }}
    >
      <Navbar />
    </NavContext.Provider>
  );
};

export default NavProvider;
