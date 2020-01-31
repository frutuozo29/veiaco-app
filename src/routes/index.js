import React from 'react'

// react-router-dom
import { Switch, Route } from 'react-router-dom'

// components
import Dashboard from '../components/Dashboard'

// pages
import Category from '../Pages/Category'
import CategoryForm from '../Pages/Category/CategoryForm'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/Category' component={Category} />
    <Route exact path='/Category/Form' component={CategoryForm} />
    <Route exact path='/Accounts' component={Dashboard} />
    <Route exact path='*' component={Dashboard} />
  </Switch>
)

export default Routes
