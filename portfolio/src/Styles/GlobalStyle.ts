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
    width: 100vw;
    background-color: ${({theme}) => theme.colors.background};
  }

  header{
    background-color: ${({theme}) => theme.colors.backgroundSection};
    width: 100vw;
    height: 80px;
  }
`

export default GlobalStyle