import styled from 'styled-components'

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 24px;
  width: 100%;
  height: 100%;
`

export const Table = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 8px;
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
  grid-gap: 8px;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 80px;
  width: 100%;
  height: 42px;
  background-color: #FFF;
  border-radius: 6px;
  align-items: center;
  padding: 0 6px;
  box-shadow: 0px 0px 5px 0px #8798AD;

  
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