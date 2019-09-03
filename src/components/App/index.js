import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'

// actions
import * as userActions from '../../actions/user'

// Routes
import Routes from '../../routes'

// styles
import { GlobalStyle, Container } from './styles'

export const App = () => {
  const dispatch = useDispatch()
  const token = useSelector(({ user }) => user.token)

  useEffect(() => {
    !token && dispatch(userActions.getToken())
  }, [token])

  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  )
}

export default App
