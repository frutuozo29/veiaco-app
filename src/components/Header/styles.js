import styled from 'styled-components'

export const HeaderStyled = styled.section`
  height: 60px;
  width: 100%;
  background-color: #FFF;
  box-shadow: 0px 1px 10px 1px #8C8C8C;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`