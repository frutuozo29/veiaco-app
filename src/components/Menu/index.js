import React from 'react'

// styles
import { MenuStyled, MenuAvatar, MenuList } from './styles'

export default ({ open, gridArea }) => (
  <MenuStyled gridArea={gridArea} open={open}>
    <MenuAvatar />
  </MenuStyled>
)