import React, { memo } from 'react'

// prop-types
import PropTypes from 'prop-types'

// styles
import { Content } from './styles'

// icons
import { ReactComponent as Add } from '../../../assets/icons/add.svg'

export const ButtonIcon = ({ onClick, ...props }) => (
  <Content>
    <Add
      {...props}
      onClick={onClick}
    />
  </Content>
)

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default memo(ButtonIcon)
