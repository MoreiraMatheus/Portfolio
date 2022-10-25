import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundSection};
  padding-bottom: 60px;
`

export const Slider = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  column-gap: 100px;
  justify-content: center;
  overflow-x: auto;
`

export const Project = styled.div`
  width: 40vw;
  max-width: 500px;
  height: 352px;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: ${({theme}) => theme.colors.pannelBaseColor};
`