import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: none;
  color: #8798AD;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  width: ${({ width }) => width || '48px'};
  height: ${({ height }) => height || '36px'};
  background-color: transparent;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    box-shadow: 0 0 3px 0 #FFF inset;
  }
`
