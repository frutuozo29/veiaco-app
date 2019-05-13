import React from 'react'

import Dashboard from '../Dashboard'
import { render } from 'react-testing-library'



describe('Dashboard', () => {
  test('renders the component', () => {
    const { getByTestId } = render(<Dashboard />)

    expect(getByTestId('dashboard')).toBeInTheDocument()
  })
})
