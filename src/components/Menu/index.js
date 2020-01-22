import React, { useState } from 'react'

// styles
import { MenuStyled } from './styles'

export default ({ gridArea }) => {
  const [opened, setOpened] = useState(true)

  return (
    <MenuStyled gridArea={gridArea} open={opened}>
      <span>MenuStyled</span>
      <button
        onClick={() => setOpened(!opened)}
      >
        {opened ? 'Close' : 'Open'} Menu
      </button>
    </MenuStyled>
  )
}