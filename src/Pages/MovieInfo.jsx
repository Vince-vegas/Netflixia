/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { DetailsContext } from '../Context/MovieInfo/DetailState';
import ImageSrc from '../Components/ImageSrc/ImageSrc';
import { Link, withRouter } from 'react-router-dom';
import SuggestedLoad from '../Components/ShowLoad/SuggestedLoad';
import SuggestError from '../Components/MovieDetail/SuggestError';
import CollectSuggested from '../Components/Collect-Movie/CollectSuggested';
import SubText from '../Components/MovieDetail/SubText';
import YoutubeIcon from '../Assets/SvgIcon/YoutubeIcon';
import axios from 'axios';
import '../Styles/movie-info.scss';
import YoutubeModal from '../Components/Modal/YoutubeModal';

const MovieInfo = (props) => {
  // DetailState Provider
  const detailContext = useContext(DetailsContext);
  const {
    noSuggested,
    movieDetail,
    movieSuggested,
    movieGenres,
    movieActors,
    setSuggested,
    setMovieDetail,
    isSuggestLoad,
    trailerKey,
    setDetail,
    isPlayTrailer,
    onWatchTrailer,
  } = detailContext;

  // DetailState's movieDetail
  const {
    backdrop_path,
    original_language,
    title,
    overview,
    runtime,
    release_date,
    poster_path,
    vote_average,
  } = movieDetail;

  useEffect(() => {
    let CancelReq = axios.CancelToken;
    let source = CancelReq.source();

    // query id
    const { id } = props.match.params;

    // set data on DetailProvider
    setMovieDetail(parseInt(id), source.token);
    setSuggested(parseInt(id), source.token);

    /*
    This useEffect will clean up the data of GenresContext when unmounting || rerender the component
    */
    return () => {
      source.cancel('Operation canceled by the user');
      setDetail({ type: 'empty-movie-detail' });
    };
  }, [props.match.params.id]);

  return (
    <div className="mn-item-info">
      <div className="container">
        {/* Movie's Big Image */}
        <div
          className="info-image"
          style={{
            backgroundImage:
              backdrop_path &&
              `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`,
          }}
        ></div>
        <div className="details">
          {/* show spinner if content overview is undefined */}
          {!overview && <SuggestedLoad />}
          {/* Show Movie Details if content overview is not undefined */}
          {overview && (
            <div className="row justify-between info-row">
              <div className="col-lg-2 col-md-3 img-info">
                {/* Movie's poster path image */}
                <div>
                  {poster_path && (
                    <ImageSrc
                      imgSrc={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      alt={title}
                    />
                  )}
                </div>
              </div>

              {/* Content Details: Movie Image, Overview, Starring */}
              <div className="col-lg-7 col-md-6">
                <div className="content-info">
                  <h2 className="info-title">{title}</h2>
                  <p className="overview mb20">{overview}</p>
                  <div className="other-info">
                    <div className="row">
                      <div className="col-md-7">
                        <SubText
                          subTitle="Genre"
                          subText={movieGenres.map((item) => (
                            <span className="selection" key={item.id}>
                              {item.name}
                            </span>
                          ))}
                        />
                        <SubText
                          subTitle="Starring"
                          subText={movieActors.map((item, index) => {
                            if (index > 4) return;
                            return (
                              <Link
                                to={`/actor/movies/${item.id}`}
                                className="selection starring"
                                key={item.id}
                              >
                                {item.name}
                              </Link>
                            );
                          })}
                        />

                        <SubText
                          subTitle="Language"
                          subText={original_language}
                        />
                      </div>
                      <div className="col-md-5">
                        <SubText
                          subTitle="Duration"
                          subText={`${runtime}min`}
                        />
                        <SubText subTitle="Release" subText={release_date} />
                        <SubText subTitle="Rating" subText={vote_average} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Buttons, Watch Trailer Button */}
              <div className="w-100 col-lg-3 col-md-2">
                <div className="info-buttons">
                  <button className="btn info-link" onClick={onWatchTrailer}>
                    <YoutubeIcon />{' '}
                    <span className="text-link">
                      {trailerKey !== undefined
                        ? 'Watch Trailer'
                        : 'No Trailer Yet'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* YOUTUBE MODAL */}
      {isPlayTrailer && (
        <YoutubeModal
          onPlayTrailer={onWatchTrailer}
          trailerKey={trailerKey.key}
        />
      )}

      {/* Movie Detail's Suggested Movies */}
      <div className="mn-suggested">
        <div className="container">
          <div className="suggest-title">
            <h1>Suggested Movies</h1>
          </div>
          <div className={`row justify-between suggested-row`}>
            {/* Show Error if no suggested movie in the server */}
            {noSuggested && <SuggestError />}
            {/* Show Load if the movieInfo's data has not been fetch completely */}
            {isSuggestLoad && <SuggestedLoad />}
            {/* Suggested Movies: total of 12 movies */}
            {movieSuggested && <CollectSuggested movieArray={movieSuggested} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieInfo);
