import React from 'react'

import { ContentInput, Label, InputStyled } from './styles'

export const Input = ({ label, placeholder, ...props }) => {
  return (
    <ContentInput>
      <Label>{label}</Label>
      <InputStyled
        placeholder={placeholder}
        aria-label={label}
        {...props}
      />
    </ContentInput>
  )
}

export default Input
