import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 12px;

  > div {
    > table {
      border-collapse: collapse;
      width: 100%;
      
      > tr {
        
        > td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        > th {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
`

export const Title = styled.h2`
  font-weight: 400;
`
