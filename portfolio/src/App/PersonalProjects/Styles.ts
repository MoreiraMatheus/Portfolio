import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.others.backgroundSection};
  padding-bottom: 60px;
`

export const Slider = styled.div`
  display: flex;
  column-gap: 24px;
  width: 80%;
  margin: 0 auto;
  padding: 0 20%;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media (max-width: 425px) {
    padding: 0;
    width: 90%;
  }
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 285px;
  height: 400px;
  padding: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.others.pannelBaseColor};

  > img{
    width: 90%;
    height: 35%;
  }

  a{
    color: ${({theme})=>theme.colors.others.pannelBaseColor};
  }
  a:hover{
    color: ${({theme})=>theme.colors.text.title};
    text-decoration: underline;
    transition: color 0.2s ease-in;
  }

  abbr{
    text-decoration: none;
  }

  > p{
    color: ${({theme})=>theme.colors.text.textSection};
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
    background-color: ${({theme})=>theme.colors.others.pannelBaseColor};
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
  }
`