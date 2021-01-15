import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Genres from '../Views/Genres';
import Main from '../Views/Main';
import PageNotFound from '../Views/PageNotFound';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/home/:pageId" component={Genres} />
        <Route exact path="/404-page" component={PageNotFound} />
        <Redirect to="/404-page" />
      </Switch>
    </Fragment>
  );
};

export default Routes;