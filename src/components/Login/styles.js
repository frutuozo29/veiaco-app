import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  background-color: #001F24;
`

export const ContentLogo = styled.div`
  display: flex;
  color: #FFF;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
    height: 480px;
    border-right: 2px solid gray;
    padding: 20px 80px;

    > img {
      width: 60px;
      height: 60px;
      fill: #F2681C;
      margin-right: 10px;
    }

    > h1 {
      font-size: 32px;
    }
  }
`

export const ContentLogin = styled.div`
  display: flex;
  color: #FFF;

  .login {
    display: grid;
    grid-template-rows: auto auto 1fr auto auto;
    grid-gap: 20px;
    align-self: center;
    justify-items: center;
    width: 100%;
    height: 480px;
    padding: 20px 80px;

    > h2 {
      align-self: center;
      font-size: 26px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-content: space-between;
      padding: 70px 0;
    }

    > a {
      text-decoration: none;
      color: #FFF;
    }
  }
`
