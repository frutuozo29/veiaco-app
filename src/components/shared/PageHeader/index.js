import React from 'react'

// styles
import { Content, PageTitle, Button } from './styles'

export default ({ title, to }) => {

  return (
    <Content>
      <PageTitle>{title}</PageTitle>
      {!!to &&
        <Button to={to}>
          New
        </Button>
      }
    </Content>
  )
}