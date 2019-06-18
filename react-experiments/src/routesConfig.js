import React from 'react';
import { Switch, Route } from 'react-router';

const RoutesConfig = ({ appRoutes }) => {
  return (
    <Switch>
      {appRoutes.map(routeProps => <Route {...routeProps} />)}
    </Switch>
  )
}

export default RoutesConfig;