import React, { Fragment, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ActorMovies from '../Views/ActorMovies';
import MovieInfo from '../Views/MovieInfo';

import PageNotFound from '../Views/PageNotFound';

const Main = lazy(() => import('../Views/Main'));
const Genres = lazy(() => import('../Views/Genres'));
const Actors = lazy(() => import('../Views/Actors'));
// const ActorMovies = lazy(() => import('../Views/ActorMovies'));

const Routes = () => {
  return (
    <Fragment>
      <Suspense fallback={<div>Page Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home/:pageId" component={Genres} key="l20r" />
          <Route exact path="/title/:id" component={MovieInfo} />
          <Route exact path="/actors" component={Actors} />
          <Route exact path="/actor/movies/:id" component={ActorMovies} />
          <Route exact path="/404-page" component={PageNotFound} />
          <Redirect to="/404-page" />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Routes;
