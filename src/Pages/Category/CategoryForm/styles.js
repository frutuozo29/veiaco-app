import styled from 'styled-components'

import Select from 'react-select'

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
  grid-gap: 48px;
  height: min-content;
`

export const SubCategories = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 26px;
`

export const SubTitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 6px;
  width: 100%;

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
  font-size: 16px;
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

export const Table = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 8px;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;


  > span {
    font-size: 12px;
    color: #8798AD;
  }
`

export const CardList = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  height: min-content;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #8798AD;
  align-items: center;
  padding: 0 6px;

  &:hover {
    text-decoration: underline;
  }

  
  > span {
    font-size: 12px;
  }

  > div {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 6px;

    > svg {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`

export const SelectOptions = styled(Select)`
  min-height: 24px !important;
`