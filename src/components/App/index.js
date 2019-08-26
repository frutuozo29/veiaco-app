import React from 'react'

// Routes
import Routes from '../../routes'

// styles
import { GlobalStyle, Container } from './styles'

export const App = () => (
  <Container>
    <GlobalStyle />
    <Routes />
  </Container>
)

export default App
