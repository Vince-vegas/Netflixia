import React, { useEffect } from 'react';
import CollectMovies from '../Components/Collect-Movie/CollectMovies';

const MovieSearched = (props) => {
  const query = new URLSearchParams(props.location.search);
  const titleQuery = query.get('q');
  useEffect(() => {
    console.log(titleQuery);
  }, [titleQuery]);

  return (
    <div className="main-collections">
      <div className="container"></div>
    </div>
  );
};

export default MovieSearched;
