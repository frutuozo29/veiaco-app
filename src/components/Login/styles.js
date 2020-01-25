import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  background-color: #FFF;

  @media (max-width: 768px) { 
    grid-template-columns: none;
    grid-template-rows: auto 1fr;
    align-content: center;
  }
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
    border-right: 2px solid #8798AD;
    padding: 20px 80px;

    @media (max-width: 768px) { 
      height: 140px;
      border: none;
      padding: 0;
    }

    > img {
      width: 52px;
      height: 52px;
      fill: #8798AD;
      margin-right: 10px;
    }

    > h1 {
      font-size: 32px;
      color: #8798AD;
    }
  }
`

export const ContentLogin = styled.div`
  display: flex;
  color: #FFF;

  .login {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-gap: 20px;
    align-self: center;
    justify-items: center;
    width: 100%;
    height: 480px;
    padding: 32px 80px;

    @media (max-width: 768px) { 
      padding: 0 16px;
      height: auto;
      align-self: flex-start;
    }

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      
      > h2 {
        align-self: center;
        font-size: 26px;
        margin-bottom: 30px;
        color: #8798AD;
      }

      > p {
        color: #8798AD;
      }
    }


    > div:nth-child(2) {
      display: grid;
      grid-gap: 20px;
      justify-content: center;
      align-self: center;
      grid-auto-rows: min-content;
    }

    > a {
      text-decoration: none;
      color: #8798AD;
    }
  }
`
