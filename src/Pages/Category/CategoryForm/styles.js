import styled from 'styled-components'

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 24px;
  width: 100%;
  height: 100%;
`

export const Form = styled.form`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 26px;
  height: min-content;
`

export const SubCategories = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 8px;
`

export const SubTitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 6px;
  width: 100%;
  border-bottom: 1px solid #8798AD;

  > button {
    justify-self: end;
  }
`

export const Footer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: min-content;
  grid-gap: 12px;
`

export const PageTitle = styled.span`
  font-size: 18px;
  color: #000;  
`

export const ButtonTitle = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #2E5BFF;
  border: none;
  color: #FFF;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  width: 46px;
  height: 26px;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 3px 0 #FFF;
  }

  &:active {
    box-shadow: 0 0 3px 0 #FFF inset;
  }
`