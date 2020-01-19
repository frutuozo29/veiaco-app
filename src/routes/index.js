import React from 'react'

// react-router-dom
import { Switch, Route } from 'react-router-dom'

// components
import Dashboard from '../components/Dashboard'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='*' component={Dashboard} />
  </Switch>
)

export default Routes
