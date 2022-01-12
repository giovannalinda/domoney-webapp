import { theme } from 'config'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.white};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${theme.colors.dark};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.dark};
  }

  html {
    font-size: 62.5%;
  }
`
