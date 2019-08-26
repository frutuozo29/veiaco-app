import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: none;
  color: #FFF;
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  width: ${({ width }) => width || '48px'};
  height: ${({ height }) => height || '36px'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#F2681C'};
`
