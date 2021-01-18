/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackgroundImage from '../Components/Layout/MovieDetail/BackgroundImage';
import Overview from '../Components/Layout/MovieDetail/Overview';
import { fetchMovieDetails } from '../Store/MovieInfo/movieInfoReducer';
import '../Styles/movie-info.scss';

const MovieInfo = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const { id } = useParams();
  const movieDetailState = useSelector((state) => state.movieDetails);
  const { movieDetail, movieActors, trailerKey } = movieDetailState;
  const dispatch = useDispatch();

  useEffect(() => {
    //
    dispatch(fetchMovieDetails({ id: parseInt(id) }));
  }, []);

  return (
    <>
      <div>
        <h1>Movie Info</h1>
      </div>
      <div className="mn-item-info">
        <div className="container">
          <BackgroundImage backdrop_path={movieDetail.backdrop_path} />
          <Overview
            movieDetails={movieDetail}
            trailerKey={trailerKey}
            movieActors={movieActors}
            isPlayTrailer={playVideo}
            onWatchTrailer={() => setPlayVideo(!playVideo)}
          />
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
