import React, { memo } from 'react'

// prop-types
import PropTypes from 'prop-types'

// styles
import { Content, TitleStyled, Button } from './styles'

export const Title = ({ title, subTitle, to }) => {
  return (
    <Content>
      <TitleStyled>{title} {!!subTitle && <span>- {subTitle}</span>}</TitleStyled>
      {!!to &&
        <Button to={to}>
          New
        </Button>
      }
    </Content>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  to: PropTypes.string,
}

export default memo(Title)