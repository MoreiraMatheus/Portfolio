import styled from "styled-components";

export const Wrapper = styled.h2`
  color: ${({theme})=>theme.colors.title};

  span{
    color: ${({theme})=>theme.colors.title};
    font-weight: bolder;
  }
`