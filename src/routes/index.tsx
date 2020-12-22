import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Test from '../pages/Teste';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/test" exact component={Test} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
