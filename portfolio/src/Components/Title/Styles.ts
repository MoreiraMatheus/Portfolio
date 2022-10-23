import styled from "styled-components";

export const Title = styled.h2`
  color: ${({theme})=>theme.colors.title};

  ::before{
    content: '</ ';
  }

  ::after{
    content: ' >';
  }
`