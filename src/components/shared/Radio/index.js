import React, { memo } from 'react'

// propTypes
import PropTypes from 'prop-types'

// styles
import { Container, InputRadio, LabelRadio } from './styles'

export const Radio = ({ id, label, value, onClick }) => (
  <Container>
    <InputRadio
      type="radio"
      id={`${id}_${value}`}
      name="radiobutton"
      value={value}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
    />
    <LabelRadio htmlFor={`${id}_${value}`}>{label}</LabelRadio>
  </Container>
)

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default memo(Radio)
