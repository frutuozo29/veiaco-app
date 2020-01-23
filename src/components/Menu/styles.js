import styled, { keyframes } from 'styled-components'

const closeKey = keyframes`
  from {
    width: 280px;
  }
  to {
    width: 60px;
  }
`

const openKey = keyframes`
  from {
    width: 60px;
  }
  to {
    width: 280px;
  }
`

export const MenuStyled = styled.section`
  display: grid;
  grid-template-rows: 52px 1fr;
  background-color: #FFF;
  
  max-width: 280px;
  width: ${({ open }) => open ? '280' : '60'}px;
  animation: ${({ open }) => open ? openKey : closeKey} 0.4s linear;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`

export const MenuButton = styled.div`
  margin: 0 0 0 8px;
  width: 38px;
  height: 32px;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 4px;
  padding: 8px;
  align-items: center;
  cursor: pointer;
  align-self: center;

  > span {
    border: 1.5px solid #8798AD;
    border-radius: 5px;
    height: 0;
  }
`

export const MenuContent = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0px 10px 8px 0px #8C8C8C;
`



