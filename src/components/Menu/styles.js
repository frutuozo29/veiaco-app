import styled from 'styled-components'

export const MenuStyled = styled.section`
  display: grid;
  grid-template-rows: 60px 1fr;
  background-color: #FFF;
  
  max-width: 280px;
  width: ${({ open }) => open ? '280' : '60'}px;
  transition: width 0.35s;

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
  box-shadow: 0px 5px 5px 0px #8C8C8C;
`



