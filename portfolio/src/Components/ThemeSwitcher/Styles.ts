import styled from "styled-components";

export const Wrapper = styled.div`
  margin-right: 16px;


  & > div{
    width: 100px;
    height: 50px;
    background-color: ${({theme}) => theme.colors.themeSwitcher};
    border-radius: 50px;
    display: flex;
    align-items: center;
    /* justify-content: flex-start; */

    & > input{
      position: absolute;
      width: 100px;
      height: 50px;
      cursor: pointer;
      opacity: 0;
    }

    & > div{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 10px;
      background-color: ${({theme}) => theme.colors.themeSwitcherButton};
    }
  }
`