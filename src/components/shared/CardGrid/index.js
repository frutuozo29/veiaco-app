import React, { memo } from 'react'

// styles
import { Content, PageTitle } from './styles'

export default CardGrid = ({ title }) => (
  <Content>
    <PageTitle>{title}</PageTitle>
  </Content>
)

export default memo(CardGrid)