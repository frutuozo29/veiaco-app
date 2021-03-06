import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #8798AD;
  font-size: 12px;
  margin-bottom: 4px;

  > span {
    color: red;
  }
`

export const InputStyled = styled.input`
  padding: 4px 8px;
  overflow: hidden;
  border: 1px solid #8798AD;
  border-radius: 4px;
  width: ${props => props.width || 220}px;
  height: ${props => props.height || 28}px;
  font-size: 12px;
  
  &:focus {
    outline-color: #2E5BFF;
  }
`
