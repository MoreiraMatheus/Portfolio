import styled from "styled-components";

export const Wrapper  = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 130px;
  padding: 8px 12px 8px 4px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.pannelBaseColor};

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