import React, { useState, useEffect } from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// redux
import { useDispatch, useSelector } from 'react-redux'

// actions
import * as userActions from '../../actions/user'

// logo
import logo from '../../assets/veiacoLogo.svg'

// Styles
import { Container, ContentLogo, ContentLogin } from './styles'

// Components
import Input from '../shared/Input'
import Button from '../shared/Button'

export const Login = ({ history }) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const token = useSelector(({ user }) => user.token)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => { token && history.push('/') }, [token])

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
              onClick={() => dispatch(userActions.loginUser(username, password))}
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
