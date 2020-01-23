import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 24px 0;
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`