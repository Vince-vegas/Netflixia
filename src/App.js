import React, { Fragment } from 'react';
import Routes from './Routes/Routes';
import './Styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </Fragment>
  );
}

export default App;
