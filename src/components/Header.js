import styled from 'styled-components'

const Header = styled.header`
  height: 156px;
  background-image: url(${props => props.backgroundDesktop});
  background-color: ${props => props.theme.colors.primary};
  ${props => props.theme.breakpoints.mobile} {
    background-image: url(${props => props.backgroundMobile});
  }
`

export default Header
