import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 24px 0;
  max-width: 1024px;
  margin: 0 auto;
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`