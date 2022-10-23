import styled from "styled-components";

export const Title = styled.h2`
  color: ${({theme})=>theme.colors.title};
  font-size: 32px;
  padding: 16px 0 40px 0;


  ::before{
    content: '</ ';
  }

  ::after{
    content: ' >';
  }
`