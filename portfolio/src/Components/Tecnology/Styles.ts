import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 130px;
  padding: 8px 12px 8px 4px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.pannelBaseColor};
  transition: 
      box-shadow 0.3s ease-in-out,
      transform 0.3s ease-in-out;

  &:hover{
    box-shadow: 0 0 5px ${({theme}) => theme.colors.textSection};
    transform: scale(1.1, 1.1);
  }

  & > img{
    width: 100px;
    margin: 0 8px;
  }

  & > span{
    margin: 0 auto;
    padding: 4px;
    color: ${({theme})=>theme.colors.textSection};
    border-bottom: 2px solid ${({theme})=>theme.colors.title};
    font-weight: bold;
    font-size: 1.4em;
    text-align: center;
  }
`

export const Popup = styled.dialog`
  width: 70vw;
  height: 50vh;
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  border: none;
  box-shadow: 0 0 10px #ccc;
  
  & > div{
    width: 100%;
    height: 100%;
    background-color: ${({theme})=>theme.colors.pannelBaseColor};
  }

  & > div > button{
    width: 30px;
    height: 30px;
    margin: 10px;
    background-color: ${({theme})=>theme.colors.title};
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
`