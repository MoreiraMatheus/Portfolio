import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.text.text};
    transition: 
      color 0.4s linear,
      background-color 0.4s linear;
    }
    
    body{
      width: 100%;
      background-color: ${({theme}) => theme.colors.others.background};
      
    ::-webkit-scrollbar{
      background-color: ${({theme})=>theme.colors.others.background};
      transition: background-color 0.5s linear;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: ${({theme})=>theme.colors.text.title};
      transition: background-color 0.5s linear;
      border: 1px solid ${({theme})=>theme.colors.others.background};
      border-radius: 5px;
    }
  }

  header{
    background-color: transparent;
    width: 100%;
    padding: 1vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    top: 0;
  }
`

export default GlobalStyle