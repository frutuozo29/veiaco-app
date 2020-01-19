import React from 'react'

// testing library
import { render } from '@testing-library/react'

// component
import Login from '../Login'

describe('Login tests', () => {
  test('render component', () => {
    const { getByTestId } = render(<Login />)

    expect(getByTestId('login')).toBeInTheDocument()
  })
})