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
`