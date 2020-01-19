import React from 'react'

// redux
import { useSelector } from 'react-redux'

// react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom'

// components
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

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
    <PrivateRoute exact path='/' component={Dashboard} />
    <PrivateRoute exact path='*' component={Dashboard} />
  </Switch>
)

export default Routes
