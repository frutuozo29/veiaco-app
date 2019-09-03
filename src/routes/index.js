import React from 'react'

// redux
import { useSelector } from 'react-redux'

// react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom'

// components
import Login from '../components/Login'
import Main from '../components/Main'

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
    <PrivateRoute exact path='/' component={Main} />
    <PrivateRoute exact path='*' component={Main} />
  </Switch>
)

export default Routes
