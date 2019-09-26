import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 20px;

  width: 100%;
  height: 100%;
  background-color: #EBEBEC;
`

export const Topbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #001F24;
  color: #FFF;
  padding: 0px 60px;

  @media (max-width: 768px) { 
    padding: 0px 12px;
  }

  > img {
    width: 48px;
    height: 48px;
    fill: #F2681C;
    margin-right: 10px;
  }

  > h1 {
    font-size: 28px;
  }

  > a {
    margin-left: auto;
    text-decoration: none;
    color: #FFF;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 60px;
  background-color: #FFF;
  border-radius: 4px;
  
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);

  @media (max-width: 768px) { 
    margin: 0px 12px;
  }

  > div {
    margin: 10px;
    padding: 6px;
    border-left: 4px solid #F2681C;
    
    > h2 {
      font-weight: 400;
    }

    > span {
      font-size: 14px;
    }
  }
`

export const Content = styled.div`
  background-color: #FFF;
  margin: 0 60px 20px 60px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);

  @media (max-width: 768px) { 
    margin: 0 12px 16px 12px;
  }
`

export const MenuStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-top: 6px;
  width: 100%;
`

export const MenuItem = styled.li`
  position: relative;
  display: inline-block;
  width: 100%;
  border-bottom: 4px solid #D1D1D2;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  color: #58585a;
  font-weight: 700;
  line-height: 45px;
  height: 45px;
  transition: all 0.2s linear;

  &:hover {
    border-bottom: 4px solid #F2681C;
    color: #000;

    > ul {
      display: block;
    }
  }
`

export const SubMenu = styled.ul`
  display: none;
  border-radius: 0 0 5px 5px;
  background-color: #FFF;
  list-style: none;
  overflow: hidden;
`

export const SubMenuItem = styled.li`

  > a {
    font-size: 14px;
    text-decoration: none;
    color: #58585a;
  }
  
  &:hover {
    background-color: #F2681C;
    
    > a {
      color: #000;
    }
  }

`
