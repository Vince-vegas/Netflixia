import React from 'react';
import Routes from './Routes/Routes';
import './Styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
