import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// react-redux
import { useDispatch, useSelector } from 'react-redux'

// actions
import * as userActions from '../../actions/user'

// logo
import logo from '../../assets/veiacoLogo.svg'

// styles
import { Container, Topbar, Menu, Content } from './styles'

export const Main = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const name = useSelector(({ user }) => user.user.name)
  const username = useSelector(({ user }) => user.user.username)

  return (
    <Container>
      <Topbar>
        <img src={logo} alt={t('common.alt_logo')} />
        <h1>{t('common.app_name')}</h1>
        <a href='/' onClick={() => dispatch(userActions.logout())}>{t('main.topbar.logout')}</a>
      </Topbar>
      <Menu>
        <div>
          <h2>{t('common.welcome')}, {name}</h2>
          <span>{t('main.user')}: {username}</span>
        </div>
        <ul>
          <li>{t('main.menu.moviments')}</li>
          <li>{t('main.menu.reports')}</li>
          <li>{t('main.menu.settings')}</li>
        </ul>
      </Menu>
      <Content />
    </Container>
  )
}

export default Main
