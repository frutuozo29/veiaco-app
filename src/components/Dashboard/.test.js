import React from 'react'

// testing library
import { render } from '@testing-library/react'

// component
import Dashboard from '../Dashboard'

describe('Dashboard tests', () => {
  test('render component', () => {
    const { getByTestId } = render(<Dashboard />)

    expect(getByTestId('dashboard')).toBeInTheDocument()
  })
})