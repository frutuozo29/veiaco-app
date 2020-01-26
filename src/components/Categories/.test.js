import React from 'react'

// testing library
import { render } from '@testing-library/react'

// component
import Categories from '../categories'

describe('Categories tests', () => {
  test('render component', () => {
    const { getByTestId } = render(<Categories />)

    expect(getByTestId('categories')).toBeInTheDocument()
  })
})