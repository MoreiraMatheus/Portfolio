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
  overflow-x: auto; 

  ::-webkit-scrollbar{
      background-color: ${({theme})=>theme.colors.pannelBaseColor};
      height: 10px;
      border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({theme})=>theme.colors.backgroundSection};
    border: 1px solid ${({theme})=>theme.colors.pannelBaseColor};
    border-radius: 5px;
  }
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  max-width: 600px;
  height: 400px;
  padding: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.pannelBaseColor};

  > img{
    width: 90%;
    max-height: 224px;
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