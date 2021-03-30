import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from 'pages/Main';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
