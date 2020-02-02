import styled from 'styled-components'

// routes
import { Link } from 'react-router-dom'

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
  height: 48px;
`

export const TitleStyled = styled.p`
  font-size: 26px;
  color: #000;

  > span {
    font-size: 16px;
    color: #8798AD;
  }
`

export const Button = styled(Link)`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #2E5BFF;
  border: none;
  color: #FFF;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  width: 52px;
  height: 32px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 3px 0 #FFF;
  }

  &:active {
    box-shadow: 0 0 3px 0 #FFF inset;
  }
`