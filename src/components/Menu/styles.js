import styled, { keyframes } from 'styled-components'

const close = keyframes`
  from {
    width: 600px;
  }
  to {
    width: 200px;
    background: blue;
  }
`

const openKey = keyframes`
  from {
    width: 200px;
  }
  to {
    width: 600px;
    background: orange;
  }
`

export const MenuStyled = styled.section`
  min-width: 320px;
  background-color: red;
  animation: ${({ open }) => open ? close : openKey} 1s linear;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`



