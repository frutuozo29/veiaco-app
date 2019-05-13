import React from 'react'

import User from '../User'
import { render } from 'react-testing-library'



describe('User', () => {
  test('renders the component', () => {
    const { getByTestId } = render(<User />)

    expect(getByTestId('user')).toBeInTheDocument()
  })
})
