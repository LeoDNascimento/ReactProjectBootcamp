import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route Path="/" exact component={Dashboard} />
    <Route Path="/repository" exact component={Repository} />
  </Switch>
);

export default Routes;
