import styled, { keyframes, css } from 'styled-components'

export const MenuStyled = styled.section`
  min-width: 320px;
  background-color: red;
  animation: ${close} 2s linear infinite;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`

const open = keyframes`
  from {
    width: 200px;
  }
  to {
    width: 600px;
    background: orange;
  }
`

const close = keyframes`
  from {
    width: 600px;
  }
  to {
    width: 200px;
    background: blue;
  }
`