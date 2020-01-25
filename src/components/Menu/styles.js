import styled from 'styled-components'

export const MenuStyled = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 16px;
  background-color: #FFF;
  max-width: 248px;
  width: ${({ open }) => open ? 248 : 72}px;
  transition: width 0.35s;
  box-shadow: 0px 5px 5px 0px #8C8C8C;
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`

export const MenuAvatar = styled.div`
  display: grid;
  
  grid-gap: 8px;

  ${({ menuOpened }) => {
    return menuOpened ?
      `
      grid-template-columns: auto 1fr;
      padding: 22px;
    ` :
      `
      grid-template-columns: auto;
      padding: 22px 6px;
    `
  }}

  > svg {
    width: 38px;
    height: 38px;
    align-self: center;
    fill: #c3c9ef;
  }



  > div {
    display: ${({ menuOpened }) => menuOpened ? 'grid' : 'none'};
    grid-template-rows: auto auto;
    transition: width 1s, opacity 1s;
    opacity: ${({ menuOpened }) => menuOpened ? 1 : 0};

    > span {
       &:first-of-type {
         color: #000;
       }

       &:last-of-type {
         color: #c3c9ef;
       }
    }
  }
`

export const MenuList = styled.div`
  display: grid;
  grid-auto-rows: 48px;
  width: 100%;
  height: 100%;
`

export const MenuItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  padding: 8px 18px;
  grid-gap: 10px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #F4F6FC;
  }

  ${({ active }) => active && `
    background-color: #F4F6FC;
    border-left: 4px solid #2E5BFF;
  `}

  > svg {
    height: 32px;
    width: 32px;
    fill: ${({ active }) => active ? '#2E5BFF' : '#c3c9ef'};
  }

  > span {
    display: ${({ menuOpened }) => menuOpened ? 'block' : 'none'};
    color: ${({ active }) => active ? '#2E5BFF' : '#c3c9ef'};
  }
`
