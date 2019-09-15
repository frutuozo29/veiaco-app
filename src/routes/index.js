import React from 'react'

// redux
import { useSelector } from 'react-redux'

// react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom'

// components
import Login from '../components/Login'
import Main from '../components/Main'

const PrivateRoute = ({ component: Component }) => {
  const { token } = useSelector(({ user }) => user)

  return (
    <Route
      render={props =>
        token || window.localStorage.getItem('veiaco-token') ? (
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

const Routes = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
    <PrivateRoute exact path='/' component={Main} />
    <PrivateRoute exact path='*' component={Main} />
  </Switch>
)

export default Routes
