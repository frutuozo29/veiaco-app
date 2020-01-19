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
  background-color: ${({ backgroundColor }) => backgroundColor || '#2E5BFF'};

  &:hover {
    box-shadow: 0 0 3px 0 #FFF;
  }

  &:active {
    box-shadow: 0 0 3px 0 #FFF inset;
  }
`
