import React, { memo } from 'react'

// prop-types
import PropTypes from 'prop-types'

// icons
import { ReactComponent as Add } from '../../../assets/icons/add.svg'

export const ButtonIcon = ({ onClick, ...props }) => (
  <Add
    {...props}
    onClick={onClick}
  />
)

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default memo(ButtonIcon)
