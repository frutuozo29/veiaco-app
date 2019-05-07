import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import User from './../components/User'
import UserForm from './../components/User/components/UserForm'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/user' component={User} />
        <Route exact path='/createuser' component={UserForm} />
        <Route exact path='/edituser/:id' component={UserForm} />
        <Route exact path='*' component={Dashboard} />
      </Switch>
    )
  }
}
