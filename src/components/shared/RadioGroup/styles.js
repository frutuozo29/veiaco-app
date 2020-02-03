import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 6px;
`

export const ContentChildren = styled.div`
  display: grid;
  grid-template-columns: ${({ total }) => `repeat(${total}, auto)`};
  grid-gap: 22px;
`

export const Label = styled.label`
  color: #8798AD;
  font-size: 12px;
  margin-bottom: 4px;

  > span {
    color: red;
  }
`