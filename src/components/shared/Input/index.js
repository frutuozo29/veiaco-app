import React, { memo } from 'react'

import PropTypes from 'prop-types'

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

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default memo(Input)
