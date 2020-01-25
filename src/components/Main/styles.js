import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-areas: 
    "header header header header"
    "menu content content content"
    "menu content content content";
  width: 100%;
  height: 100%;
  background-color: #F4F6FC;
`
