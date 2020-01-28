import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const spin = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  
  to { 
    transform: rotate(360deg); 
  }
`
export const Forward = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: #2E5BFF transparent transparent #2E5BFF;
  animation: ${spin} 1s linear 0s infinite;
`

export const Backward = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  border-style: solid;
  border-width: 1px;
  border-color: #2e93ff transparent transparent #2e93ff;
  animation: ${spin} 1s linear 0s infinite reverse;
`

export const Logo = styled.img`
  position: absolute;
  width: 42px;
  height: 74px;
  fill: #F2681C;
`
