import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: ${props => props.theme.colors.black};
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily}, sans-serif;
    font-size: 15px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button{
    border: none;
    cursor: pointer;
    outline:none;
    font-family: ${props => props.theme.typography.fontFamily}, sans-serif;
  }
`
export default GlobalStyle
