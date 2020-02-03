import React, { memo } from 'react'

// prop-types
import PropTypes from 'prop-types'

// styles
import { ButtonStyled } from './styles'

export const ButtonLink = ({ onClick, ...props }) => (
  <ButtonStyled
    {...props}
    type="button"
    onClick={onClick}
  />
)

ButtonLink.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default memo(ButtonLink)
