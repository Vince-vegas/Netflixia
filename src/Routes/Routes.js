import React, { Fragment, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Genres from '../Views/Genres';
import Main from '../Views/Main';
import PageNotFound from '../Views/PageNotFound';

const TestLoadable = lazy(() => import('../Views/TestLoadable'));

const Routes = () => {
  return (
    <Fragment>
      <Suspense fallback={<div>Page Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home/:pageId" component={Genres} />
          <Route exact path="/loadable" component={TestLoadable} />
          <Route exact path="/404-page" component={PageNotFound} />
          <Redirect to="/404-page" />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Routes;
