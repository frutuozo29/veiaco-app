import React from 'react'

// react-router-dom
import { Switch, Route } from 'react-router-dom'

// components
import Dashboard from '../components/Dashboard'
import Categories from '../components/Categories'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/Categories' component={Categories} />
    <Route exact path='/Accounts' component={Dashboard} />
    <Route exact path='*' component={Dashboard} />
  </Switch>
)

export default Routes
