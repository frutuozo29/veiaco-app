import React, { memo } from 'react'

// prop-types
import PropTypes from 'prop-types'

// Radio Group Context
import RadioGroupContext from './RadioGroupContext'

// styles
import { Container, ContentChildren, Label } from './styles'

export const RadioGroup = ({ label, value, children, onChange }) => {

  return (
    <RadioGroupContext.Provider value={{ onChange }}>
      <Container>
        <Label>{label}</Label>
        <ContentChildren total={children.length}>
          {children}
        </ContentChildren>
      </Container>
    </RadioGroupContext.Provider>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default memo(RadioGroup)