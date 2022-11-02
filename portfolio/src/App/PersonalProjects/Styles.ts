import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundSection};
  padding-bottom: 60px;
`

export const Slider = styled.div`
  display: flex;
  column-gap: 24px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 8px;
  overflow-x: hidden;
  scroll-behavior: smooth;

  /* ::-webkit-scrollbar{
      background-color: ${({theme})=>theme.colors.pannelBaseColor};
      height: 10px;
      border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({theme})=>theme.colors.backgroundSection};
    border: 1px solid ${({theme})=>theme.colors.pannelBaseColor};
    border-radius: 5px;
  } */

  @media (max-width: 375px) {
    width: 90%;
  }
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  min-width: 285px;
  max-width: 600px;
  height: 400px;
  padding: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.pannelBaseColor};

  @media (max-width: 375px) {
    /* width: ; */
  }

  > img{
    width: 90%;
    height: 60%;
    
    @media (max-width: 1285px) {
      width: 90%;
      height: 53%;
    }
    @media (max-width: 768px) {
      width: 90%;
      height: 40%;
    }
  }

  a{
    color: ${({theme})=>theme.colors.pannelBaseColor};
  }
  a:hover{
    color: ${({theme})=>theme.colors.title};
    text-decoration: underline;
    transition: color 0.2s ease-in;
  }

  abbr{
    text-decoration: none;
  }

  > p{
    color: ${({theme})=>theme.colors.textSection};
    width: 80%;
    text-align: center;
    padding: 8px;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  width: 30%;
  margin: 8px auto 0;

  & > button{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${({theme})=>theme.colors.pannelBaseColor};
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
  }
`