import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'Components/ErrorBoundary';

const Welcome = lazy(() => import(/* webpackChunkName: "welcome-page" */ 'Pages/welcome'));

const routes = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Welcome} exact />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default routes;
