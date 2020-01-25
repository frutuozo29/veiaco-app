import styled from 'styled-components'

export const MenuStyled = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: #FFF;
  max-width: 280px;
  width: ${({ open }) => open ? '280' : '60'}px;
  transition: width 0.35s;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`

export const MenuAvatar = styled.div`
  
  box-shadow: 0px 5px 5px 0px #8C8C8C;
`



