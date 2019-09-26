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
import { Container, Topbar, Menu, Content, MenuStyled, MenuItem, SubMenu, SubMenuItem } from './styles'

export const Main = ({ history }) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const { name, username } = useSelector(({ user }) => user.user)

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
        <MenuStyled>
          <MenuItem>
            {t('main.menu.moviments')}
            <SubMenu>
              <SubMenuItem><a href='/'>{t('main.menu.movimentsItems.formPayment')}</a></SubMenuItem>
            </SubMenu>
          </MenuItem>
          <MenuItem>{t('main.menu.reports')}</MenuItem>
          <MenuItem>{t('main.menu.settings')}</MenuItem>
        </MenuStyled>
      </Menu>
      <Content />
    </Container>
  )
}

export default Main
