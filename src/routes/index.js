import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Login from '../components/Login'

export default () => (
  <Switch>
    <Route exact path='/' component={Login} />
  </Switch>
)
