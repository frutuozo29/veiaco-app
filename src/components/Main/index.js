import React from 'react'

// apollo client
import { useQuery } from '@apollo/react-hooks'

// queries
import { IS_LOGGED_IN } from '../../graphql/queries'

// Routes
import Routes from '../../routes'

// components
import Login from '../Login'

export const Main = () => {
  const { data } = useQuery(IS_LOGGED_IN)

  return data && data.isLoggedIn ?
    <Routes /> :
    <Login />
}

export default Main
