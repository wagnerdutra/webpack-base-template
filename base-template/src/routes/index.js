import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HelloComponent from '../components/HelloComponent';

const routes = () => (
  <Switch>
    <Route path="/" component={HelloComponent} exact />
  </Switch>
);

export default routes;
