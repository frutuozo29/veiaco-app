import React from 'react'

// apollo client
import { useQuery } from '@apollo/react-hooks'

// queries
import { IS_LOGGED_IN } from '../../graphql/queries'

// Routes
import Routes from '../../routes'

// components
import Login from '../Login'
import Header from '../Header'
import Menu from '../Menu'
import Content from '../Content'

// styles 
import { Container } from './styles'

export const Main = () => {
  const { data } = useQuery(IS_LOGGED_IN)

  return data && data.isLoggedIn ?
    <Container>
      <Header gridArea='header' />
      <Menu gridArea='menu' />
      <Content gridArea='content'>
        <Routes />
      </Content>
    </Container>
    :
    <Login />
}

export default Main
