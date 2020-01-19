import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
`

export const Label = styled.label`
  color: #8798AD;
`

export const InputStyled = styled.input`
  padding: 6px 12px;
  overflow: hidden;
  border: 1px solid #8798AD;
  border-radius: 4px;
  width: ${props => props.width || '220px'};
  height: ${props => props.height || '36px'};
  
  &:focus {
    outline-color: #2E5BFF;
  }
`
