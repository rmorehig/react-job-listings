import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => props.flexWrap || ''};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'center'};
  margin-bottom: ${props => props.mb}px;
`
export const FlexColumn = styled(Flex)`
  flex-direction: column;
`

export default Flex
