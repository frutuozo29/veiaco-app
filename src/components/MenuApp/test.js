import React from 'react'

import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from 'react-testing-library'
import MenuApp from '../MenuApp'



describe('MenuApp', () => {
  test('renders the component', () => {
    const { getByTestId } = render(<Router><MenuApp /></Router>)

    expect(getByTestId('menu-app')).toBeInTheDocument()
  })

  test('renders the component collapsed', () => {
    const { getByTestId, container, debug } = render(<Router><MenuApp /></Router>)

    fireEvent.click(getByTestId('menu-app'))
    debug(container.querySelector('[class="ant-layout-sider-collapsed"]'))
    expect(container.querySelector('[class="ant-layout-sider-collapsed"]')).toBeInTheDocument()
  })
})
