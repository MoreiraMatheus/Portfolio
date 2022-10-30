import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({theme}) => theme.colors.pannelBaseColor};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  & > a{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > a > img{
    width: 80%;
  }
`