import React, { memo } from 'react'

import { ButtonStyled } from './styles'

export const Button = ({ ...props }) => {
  return (
    <ButtonStyled type="button" {...props} />
  )
}

export default memo(Button)
