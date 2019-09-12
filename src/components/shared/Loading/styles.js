import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  background-color: #FFF;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
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
  width: 120px
  height: 120px
  border-radius: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: #F2681C transparent transparent #F2681C;
  animation: ${spin} 1s linear 0s infinite;
`

export const Backward = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  border-style: solid;
  border-width: 1px;
  border-color: #F2681C transparent transparent #F2681C;
  animation: ${spin} 1s linear 0s infinite reverse;
`

export const Logo = styled.img`
  position: absolute;
  width: 72px
  height: 72px
  border-radius: 36px
  fill: #F2681C;
`
