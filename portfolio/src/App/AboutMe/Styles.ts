import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.others.backgroundSection};
    text-align: center;
    padding-bottom: 54px;

    > div{
      font-size: 24px;

      p{
        width: 70%;
        margin: 0 auto;
      }
    }
`