import styled, { keyframes } from 'styled-components'

const closeKey = keyframes`
  from {
    width: 320px;
  }
  to {
    width: 86px;
    background: blue;
  }
`

const openKey = keyframes`
  from {
    width: 86px;
  }
  to {
    width: 320px;
    background: orange;
  }
`

export const MenuStyled = styled.section`
  max-width: 320px;
  width: ${({ open }) => open ? '320' : '86'}px;
  background-color: red;
  animation: ${({ open }) => open ? openKey : closeKey} 1s linear;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}


  > div {
    width: 32px;
    height: 32px;
    display: grid;
    grid-auto-rows: auto;
    padding: 8px;

    > span {
      border: 1px solid #000;
      width: 12px;
    }
  }
`



