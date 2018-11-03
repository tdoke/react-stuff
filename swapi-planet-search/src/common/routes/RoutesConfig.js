import React from 'react'
import { Switch, Route } from 'react-router'
import LoginContainer from '../../auth/LoginContainer'
import SearchPlanetsContainer from '../../planets/SearchPlanetsContainer'

export const RoutesConfig = () => (
  <Switch>
    <Route exact path="/" component={LoginContainer} />
    <Route path="/planets/search" component={SearchPlanetsContainer} />
  </Switch>
)