import React from 'react'

// logo
import logo from '../../assets/veiacoLogo.svg'

// Styles
import { Container, ContentLogo, ContentLogin } from './styles'

// Components
import Input from '../shared/Input'
import Button from '../shared/Button'

export const Login = () => (
  <Container>
    <ContentLogo>
      <div className='logo'>
        <img src={logo} alt='logo do veiaco' />
        <h1>Veiaco</h1>
      </div>
    </ContentLogo>
    <ContentLogin>
      <div className='login'>
        <h2>Welcome</h2>
        <p>Let's join to the fun, login now</p>
        <div>
          <Input
            label='Username'
            name='username'
            width='280px'
          />
          <Input
            label='Password'
            name='password'
            width='280px'
            type='password'
          />
        </div>
        <Button width='200px'>Login</Button>
        <a href='/'>Forgotten your password?</a>
      </div>
    </ContentLogin>
  </Container>
)

export default Login
