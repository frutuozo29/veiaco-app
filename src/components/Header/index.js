import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// logo
import logo from '../../assets/veiacoLogo.svg'

// icones
import { ReactComponent as Settings } from '../../assets/icons/settings.svg'
import { ReactComponent as Profile } from '../../assets/icons/profile.svg'

// styles
import { HeaderStyled, HeaderButton, HeaderContent, Logo, Icons } from './styles'

export default ({ open, gridArea, onClickMenuButton }) => {
  const { t } = useTranslation()

  return (
    <HeaderStyled gridArea={gridArea} menuOpened={open}>
      <HeaderButton
        onClick={onClickMenuButton}
      >
        <span></span>
        <span></span>
        <span></span>
      </HeaderButton>
      <HeaderContent>
        <div className='content'>
          <Logo>
            <div className='logo'>
              <img src={logo} alt={t('common.alt_logo')} />
              <h1>{t('common.app_name_minuscle')}</h1>
            </div>
          </Logo>
          <Icons>
            <Profile />
            <Settings />
          </Icons>
        </div>
      </HeaderContent>
    </HeaderStyled>
  )
}