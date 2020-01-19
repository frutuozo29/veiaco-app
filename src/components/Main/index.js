import React from 'react'

// react-redux
import { useSelector } from 'react-redux'

// Routes
import Routes from '../../routes'

// styles
import { Container } from './styles'

export const Main = ({ history }) => {
  const { token } = useSelector(({ user }) => user)

  if (token) {
    return (
      <Container>
        <Routes />
      </Container>
    )
  } else {
    return <Routes />
  }
}

export default Main
