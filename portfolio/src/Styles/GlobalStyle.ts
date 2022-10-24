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
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};

    ::-webkit-scrollbar{
      background-color: ${({theme})=>theme.colors.background};
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: ${({theme})=>theme.colors.backgroundSection};
      border-radius: 5px;
    }
  }

  header{
    background-color: ${({theme}) => theme.colors.backgroundSection};
    width: 100%;
    height: 80px;
  }
`

export default GlobalStyle