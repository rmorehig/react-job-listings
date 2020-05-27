import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-wrap: ${props => props.flexWrap || ''};
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'center'};
  margin-bottom: ${props => props.mb}px;
`

export default Flex
