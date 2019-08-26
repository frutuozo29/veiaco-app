import React from 'react'

import { ContentInput, Label, InputStyled } from './styles'

export const Input = ({ label, ...props }) => {
  return (
    <ContentInput>
      <Label>{label}</Label>
      <InputStyled {...props} />
    </ContentInput>
  )
}

export default Input
