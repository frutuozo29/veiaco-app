import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// styles
import { MenuStyled, MenuAvatar, MenuList, MenuItem } from './styles'

// icones
import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg'
import { ReactComponent as Transfers } from '../../assets/icons/transfers.svg'
import { ReactComponent as Accounts } from '../../assets/icons/accounts.svg'
import { ReactComponent as Releases } from '../../assets/icons/releases.svg'
import { ReactComponent as Categories } from '../../assets/icons/categories.svg'

export default ({ open, gridArea }) => {
  const { t } = useTranslation()

  return (
    < MenuStyled gridArea={gridArea} open={open} >
      <MenuAvatar menuOpened={open}>
        <Avatar />
        <div>
          <span>{t('menu.welcome')}</span>
          <span>Renan Frutuozo</span>
        </div>
      </MenuAvatar>
      <MenuList>
        <MenuItem menuOpened={open}>
          <Categories />
          <span>{t('menu.menus.categories')}</span>
        </MenuItem>
        <MenuItem menuOpened={open}>
          <Transfers />
          <span>{t('menu.menus.transfers')}</span>
        </MenuItem>
        <MenuItem active menuOpened={open}>
          <Accounts />
          <span>{t('menu.menus.accounts')}</span>
        </MenuItem>
        <MenuItem menuOpened={open}>
          <Releases />
          <span>{t('menu.menus.releases')}</span>
        </MenuItem>
      </MenuList>
    </MenuStyled >
  )
}