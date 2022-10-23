import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 80px auto;

  img{
    height: 300px;
    width: 300px;
  }

  h1{
    margin-left: 160px;
    text-align: center;
    font-size: 28px;
    color: ${({theme}) => theme.colors.title};
  }
`