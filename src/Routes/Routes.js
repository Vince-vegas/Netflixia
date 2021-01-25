import React, { Fragment, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../Views/Main';
import PageNotFound from '../Views/PageNotFound';

// Pages that are CodeSplitting solution
const Genres = lazy(() => import('../Views/Genres'));
const MovieInfo = lazy(() => import('../Views/MovieInfo'));
const Actors = lazy(() => import('../Views/Actors'));
const ActorMovies = lazy(() => import('../Views/ActorMovies'));
const MovieSearched = lazy(() => import('../Views/MovieSearched'));

// ROUTES
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
          <Route exact path="/search" component={MovieSearched} />
          <Route exact path="/404-page" component={PageNotFound} />
          <Redirect to="/404-page" />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Routes;
