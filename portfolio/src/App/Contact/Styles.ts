import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 80px;

  & > div{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 8%;
    row-gap: 16px;
    width: 80%;
    /* background-color: blue; */
    margin: 0 auto;
  }
`