import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../components/Login'

const requireLogin = (history) => {

}

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        getToken('jwt-cdh') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

const Routes = ({ history }) => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <PrivateRoute exact path='*' component={Login} />
  </Switch>
)

export default Routes
