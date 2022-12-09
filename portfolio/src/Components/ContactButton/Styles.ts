import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: ${({theme}) => theme.colors.others.pannelBaseColor};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &:hover{
    transition: 
      box-shadow 0.4s ease-in-out,
      transform 0.4s ease-in-out;
    box-shadow: 0 4px 8px ${({theme}) => theme.colors.text.textSectionShadow};
    transform: scale(1.1, 1.1);
  }

  & > a{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > a > img{
    width: 80%;
  }
`