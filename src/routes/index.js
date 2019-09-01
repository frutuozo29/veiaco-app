import React from 'react'

// redux
import { useSelector } from 'react-redux'

// react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom'

// components
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = useSelector(({ user }) => user.token)

  return (
    <Route
      {...props}
      render={props =>
        token ? (
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
    <PrivateRoute exact path='/' component={Dashboard} />
    <PrivateRoute exact path='*' component={Dashboard} />
  </Switch>
)

export default Routes
