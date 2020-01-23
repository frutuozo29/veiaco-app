import React, { useState } from 'react'

// styles
import { MenuStyled, MenuButton, MenuContent } from './styles'

export default ({ gridArea }) => {
  const [opened, setOpened] = useState(true)

  return (
    <MenuStyled gridArea={gridArea} open={opened}>
      <MenuButton
        onClick={() => setOpened(!opened)}
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <MenuContent />
    </MenuStyled>
  )
}