import React from 'react';
import Routes from './Routes/Routes';
import './Styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import NavProvider from './Context/NavProvider';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <NavProvider /> */}
        <Routes />
      </Router>
    </>
  );
}

export default App;
