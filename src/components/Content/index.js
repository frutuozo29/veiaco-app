import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 100%;
  padding: 64px 24px 64px;
  max-width: 1024px;
  margin: 0 auto;
  ${({ gridArea }) => gridArea && `grid-area: ${gridArea}`}
`