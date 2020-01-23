import styled from 'styled-components'

export const HeaderStyled = styled.section`
  height: 52px;
  width: 100%;
  background-color: red;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`