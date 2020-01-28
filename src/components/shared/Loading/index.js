import React from 'react'

// logo
import logo from '../../../assets/veiacoLogo.svg'

// styles
import { Container, Forward, Backward, Logo } from './styles'

export const Loading = () => {
  return (
    <Container>
      <Forward />
      <Backward />
      <Logo src={logo} alt='logo' />
    </Container>
  )
}

export default Loading
