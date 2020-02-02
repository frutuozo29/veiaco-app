import React, { memo } from 'react'

import PropTypes from 'prop-types'

import { ContentInput, Label, InputStyled } from './styles'

export const Input = ({ label, placeholder, required, ...props }) => {
  return (
    <ContentInput>
      <Label>{label} {!!required && <span>*</span>}</Label>
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
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

export default memo(Input)
