import styled from "styled-components";

interface TitleProps{
  customPadding?: string;
  contrast?: boolean;
}

export const Title = styled.h2<TitleProps>`
  color: ${({theme, contrast}) => contrast ? theme.colors.others.background : theme.colors.text.title};
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