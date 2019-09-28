import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`
