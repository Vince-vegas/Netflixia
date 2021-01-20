import React from 'react';
import SuggestedCard from '../../Card/SuggestedCard';
import SuggestError from '../../MovieDetail/SuggestError';
import ContentSpinner from './ContentSpinner';

const SuggestedMovies = ({ suggestMovies, isSuggestLoad, noSuggested }) => {
  return (
    <>
      <div className="mn-suggested">
        <div className="container">
          <div className="suggest-title">
            <h1>Suggested Movies</h1>
          </div>
          <div className="row justify-between suggested-row">
            {/* Show Spinner when fetching suggested movies */}
            {isSuggestLoad && <ContentSpinner />}

            {/* Show Text when no suggested movies */}
            {noSuggested && <SuggestError />}

            {suggestMovies &&
              suggestMovies.map(({ id, ...otherProps }) => (
                <SuggestedCard key={id} {...otherProps} id={id} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestedMovies;
