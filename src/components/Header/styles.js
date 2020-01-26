import styled from 'styled-components'

export const HeaderStyled = styled.section`
  display: grid;
  grid-template-columns: ${({ menuOpened }) => menuOpened ? '248px 1fr' : '60px 1fr'};
  height: 60px;
  width: 100%;
  background-color: #FFF;
  border-bottom: 1px solid #c3c9ef;
  box-shadow: 0px 0px 5px 1px #8C8C8C;
  transition: width 0.35s;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`

export const HeaderButton = styled.div`
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

    &:last-of-type {
      width: 68%;
    }
  }
`

export const HeaderContent = styled.div`
  display: grid;
  align-items: center;
  padding: 0 24px;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

export const Logo = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: start;
  max-width: 1024px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    
    @media (max-width: 768px) { 
      height: 140px;
      border: none;
      padding: 0;
    }

    > img {
      width: 22px;
      height: 22px;
      fill: #8798AD;
      margin-right: 10px;
    }

    > h1 {
      font-size: 24px;
      color: #8798AD;
    }
  }
`

export const Icons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 12px;
  width: min-content;
  justify-self: end;


  > svg {
    width: 20px;
    height: 20px;
    fill: #8798AD;
    cursor: pointer;
  }
`