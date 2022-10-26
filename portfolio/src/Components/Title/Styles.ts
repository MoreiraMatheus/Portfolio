import styled from "styled-components";

interface TitleProps{
  customPadding?: string;
  contrast?: boolean;
}

export const Title = styled.h2<TitleProps>`
  color: ${({theme, contrast}) => contrast ? theme.colors.background : theme.colors.title};
  font-size: 32px;
  text-align: center;
  padding: ${({customPadding}) => customPadding? customPadding : '16px 0 40px 0'};


  ::before{
    content: '</ ';
  }

  ::after{
    content: ' >';
  }
`