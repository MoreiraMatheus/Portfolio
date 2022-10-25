import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundSection};
  padding-bottom: 60px;
`

export const Slider = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  column-gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;
  
`

export const Project = styled.div`
  width: 40vw;
  max-width: 600px;
  height: 352px;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: ${({theme}) => theme.colors.pannelBaseColor};

  > img{
    margin: 5%;
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
`