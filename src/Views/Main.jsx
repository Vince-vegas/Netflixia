import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/main-page.scss';

const Main = () => {
  return (
    <div className="mn-homepage">
      <div className="container">
        <div className="row align-center justify-center hp-row">
          <div className="hp-discover mb50">
            <h1>Netflixia</h1>
            <Link to="/home/1" className="btn hp-btn">
              Discover Movies
            </Link>
          </div>
          <div className="hp-content">
            <p>
              Discover the latest and top movies worldwide. This website uses
              <a
                href="https://developers.themoviedb.org/3"
                className="link"
                target="blank"
              >
                {' '}
                The Movie DataBase Api
              </a>{' '}
              for retrieving movie data to this site. It's goal is to provide
              the users to browse all upcoming and excitement movies globally
              for free.{' '}
              <a
                href="https://developers.themoviedb.org/3"
                className="link"
                target="blank"
              >
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
