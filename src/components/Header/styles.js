import styled from 'styled-components'

export const HeaderStyled = styled.section`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  height: 60px;
  width: 100%;
  background-color: #FFF;
  box-shadow: 0px 0px 5px 1px #8C8C8C;

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
    border: 1.5px solid #c3c9ef;
    border-radius: 5px;
    height: 0;

    &:last-of-type {
      width: 68%;
    }
  }
`