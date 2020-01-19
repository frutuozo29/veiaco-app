import React, { useState } from 'react'

// apollo client
import { useApolloClient, useMutation } from '@apollo/react-hooks'

// i18n
import { useTranslation } from 'react-i18next'

// logo
import logo from '../../assets/veiacoLogo.svg'

// Styles
import { Container, ContentLogo, ContentLogin } from './styles'

// Components
import Input from '../shared/Input'
import Button from '../shared/Button'

// graphql mutations
import { LOGIN } from '../../graphql/mutations/user'

export const Login = () => {
  const { t } = useTranslation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const client = useApolloClient()

  const [login] = useMutation(
    LOGIN,
    {
      onCompleted: (data) => {
        data && data.login && data.login.token && (() => {
          client.writeData({ data: { isLoggedIn: true } })
          localStorage.setItem('veiaco-token', data.login.token)
        })()
      }
    }
  )

  const handleLogin = () => {
    login({
      variables: {
        username,
        password
      }
    })
  }

  return (
    <Container data-testid='login'>
      <ContentLogo>
        <div className='logo'>
          <img src={logo} alt={t('common.alt_logo')} />
          <h1>{t('common.app_name')}</h1>
        </div>
      </ContentLogo>
      <ContentLogin>
        <div className='login'>
          <div>
            <h2>{t('common.welcome')}</h2>
            <p>{t('login.message_welcome')}</p>
          </div>
          <div>
            <Input
              label={t('login.input.username')}
              name='username'
              width='280px'
              autoComplete='off'
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <Input
              label={t('login.input.password')}
              name='password'
              width='280px'
              type='password'
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <Button
              width='280px'
              onClick={handleLogin}
            >
              {t('login.button.login')}
            </Button>
          </div>
          <a href='/'>{t('login.forgotten_password')}</a>
        </div>
      </ContentLogin>
    </Container>
  )
}

export default Login
