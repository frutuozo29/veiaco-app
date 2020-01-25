import React from 'react'

// styles
import { HeaderStyled, MenuButton } from './styles'

export default ({ gridArea, onClickMenuButton }) => {

  return (
    <HeaderStyled gridArea={gridArea}>
      <MenuButton
        onClick={onClickMenuButton}
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
    </HeaderStyled>
  )
}