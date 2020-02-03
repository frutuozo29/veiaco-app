import React, { memo } from 'react'

// prop-types
import PropTypes from 'prop-types'


// styles
import { Container, ContentChildren, Label } from './styles'

export const RadioGroup = ({ label, children }) => {

  return (
    <Container >
      <Label>{label}</Label>
      <ContentChildren total={children.length}>
        {children}
      </ContentChildren>
    </Container>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default memo(RadioGroup)