import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux'

// actions
import * as userActions from '../../actions/user'

// logo
import logo from '../../assets/veiacoLogo.svg'

// Styles
import { Container, ContentLogo, ContentLogin } from './styles'

// Components
import Input from '../shared/Input'
import Button from '../shared/Button'

export const Login = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(userActions.loginUser(username, password))
  }

  return (
    <Container>
      <ContentLogo>
        <div className='logo'>
          <img src={logo} alt='logo do veiaco' />
          <h1>Veiaco</h1>
        </div>
      </ContentLogo>
      <ContentLogin>
        <div className='login'>
          <div>
            <h2>Welcome</h2>
            <p>Let's join to the fun, login now</p>
          </div>
          <div>
            <Input
              label='Username'
              name='username'
              width='280px'
              autoComplete='off'
              value={username}
              onChange={({ target: { value } }) => {
                console.log(value)
                setUsername(value)
              }}
            />
            <Input
              label='Password'
              name='password'
              width='280px'
              type='password'
              value={password}
              onChange={({ target: { value } }) => {
                console.log(value)
                setPassword(value)
              }}
            />
            <Button
              width='280px'
              onClick={() => handleLogin()}
            >
              Login
            </Button>
          </div>
          <a href='/'>Forgotten your password?</a>
        </div>
      </ContentLogin>
    </Container>
  )
}

export default Login
