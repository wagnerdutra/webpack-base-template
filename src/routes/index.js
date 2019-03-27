import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';

const routes = () => (
  <Switch>
    <Route path="/" component={Welcome} exact />
  </Switch>
);

export default routes;
