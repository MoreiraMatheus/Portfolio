import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: 16px;


  & > div{
    width: 40px;
    height: 40px;
    background-color: ${({theme}) => theme.colors.themeSwitcher};
    border-radius: 50%;
    display: flex;
    align-items: center;

    & > input{
      position: absolute;
      width: 40px;
      height: 40px;
      cursor: pointer;
      opacity: 0;
    }

    & > div{ 
      width: 20px;
      height: 20px;
      margin: auto;
    }
  }
`