import styled from 'styled-components'

export const HeaderStyled = styled.section`
  height: 60px;
  width: 100%;
  background-color: #FFF;
  box-shadow: 0px 0px 5px 1px #8C8C8C;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`