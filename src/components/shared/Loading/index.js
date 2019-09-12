import React from 'react'

// logo
import logo from '../../../assets/veiacoLogo.svg'

// styles
import { Container, Content, Forward, Backward, Logo } from './styles'

export const Loading = () => {
  return (
    <Container>
      <Content>
        <Forward />
        <Backward />
        <Logo src={logo} alt='logo' />
      </Content>
    </Container>
  )
}

export default Loading
