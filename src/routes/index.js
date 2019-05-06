import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import User from './../components/User'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/user' component={User} />
        <Route exact path='*' component={Dashboard} />
      </Switch>
    )
  }
}
