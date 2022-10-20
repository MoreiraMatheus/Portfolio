import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.text};
  }

  body{
    background-color: ${({theme}) => theme.colors.background};
  }
`

export default GlobalStyle