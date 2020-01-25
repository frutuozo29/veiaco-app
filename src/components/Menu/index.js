import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// styles
import { MenuStyled, MenuAvatar, MenuList, MenuItem } from './styles'

// icones
import { ReactComponent as Avatar } from '../../assets/icons/avatar.svg'
import { ReactComponent as CreditCard } from '../../assets/icons/creditCard.svg'
import { ReactComponent as Expenses } from '../../assets/icons/expenses.svg'
import { ReactComponent as Revenues } from '../../assets/icons/revenues.svg'

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
          <Revenues />
          <span>Revenues</span>
        </MenuItem>
        <MenuItem active menuOpened={open}>
          <CreditCard />
          <span>Form Paiment</span>
        </MenuItem>
        <MenuItem menuOpened={open}>
          <Expenses />
          <span>Expenses</span>
        </MenuItem>
      </MenuList>
    </MenuStyled >
  )
}