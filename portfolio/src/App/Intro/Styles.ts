import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5%;
  width: 80%;
  margin: 80px auto;

  @media(max-width: 425px){
    flex-direction: column;
  }

  > div{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      height: 300px;
      width: 300px;
      
      @media(max-width: 425px){
        height: 200px;
        width: 200px;
      }
    }
  
    h1{
      text-align: center;
      font-size: 28px;
      color: ${({theme}) => theme.colors.title};
      font-family: 'Press Start 2P', cursive;
      
      @media(max-width: 425px){
        margin-top: 40px;
      }
    }
    
    a{
      margin-top: 16px;
      padding: 8px;
      color: ${({theme}) => theme.colors.textSection};
      border-radius: 16px;
      text-decoration: none;
      font-weight: bold;
      transition: background-color .2s linear;
    }
    a:hover{
      background-color: ${({theme})=>theme.colors.title};
    }
  } 
`