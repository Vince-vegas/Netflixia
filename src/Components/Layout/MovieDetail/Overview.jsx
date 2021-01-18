/* eslint-disable array-callback-return */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import YoutubeIcon from '../../../Assets/SvgIcon/YoutubeIcon';
import YoutubeModal from '../../Modal/YoutubeModal';
import SubText from '../../MovieDetail/SubText';

const Overview = (props) => {
  const { trailerKey, onWatchTrailer, isPlayTrailer } = props;
  const {
    poster_path,
    title,
    overview,
    movieGenres,
    movieActors,
    original_language,
    runtime,
    release_date,
    vote_average,
  } = props.movieDetails;
  return (
    <Fragment>
      <div className="details">
        <div className="row justify-between info-row">
          <div className="col-lg-2 col-md-3 img-info">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
              />
            </div>
          </div>
          {/*  */}
          <div className="col-lg-7 col-md-6">
            <div className="content-info">
              <h2 className="info-title">{title}</h2>
              <p className="overview mb20">{overview}</p>
              <div className="other-info">
                <div className="row">
                  <div className="col-md-7">
                    {/* <SubText
                      subTitle="Genre"
                      subText={movieGenres.map((item) => (
                        <span className="selection" key={item.id}>
                          {item.name}
                        </span>
                      ))}
                    /> */}
                    {/* <SubText
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
                    /> */}

                    <SubText subTitle="Language" subText={original_language} />
                  </div>
                  <div className="col-md-5">
                    <SubText subTitle="Duration" subText={`${runtime}min`} />
                    <SubText subTitle="Release" subText={release_date} />
                    <SubText subTitle="Rating" subText={vote_average} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
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
      </div>
      {isPlayTrailer && (
        <YoutubeModal onPlayTrailer={onWatchTrailer} trailerKey={trailerKey} />
      )}
    </Fragment>
  );
};

export default Overview;
