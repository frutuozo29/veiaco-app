import React from 'react'

// styles
import { Content, PageTitle } from './styles'

export default ({ title }) => {

  return (
    <Content>
      <PageTitle>{title}</PageTitle>
    </Content>
  )
}