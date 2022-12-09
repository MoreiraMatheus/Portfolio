import styled, { keyframes } from "styled-components";

const darkeningBackground = keyframes`
  0%{
    background-color: rgba(0, 0, 0, 0);
  }
  100%{
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const popupApearing = keyframes`
  0%{
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  100%{
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 130px;
  padding: 8px 12px 8px 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.others.pannelBaseColor};
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px ${({ theme }) => theme.colors.text.textSectionShadow};
    transform: scale(1.1, 1.1);
  }

  & > img {
    width: 100px;
    margin: 0 8px;
  }
`;

export const Popup = styled.dialog`
  animation: .3s ${darkeningBackground} linear;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  
  & > div {
    animation: .3s ${popupApearing} linear;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    min-width: 60vw;
    min-height: 50vh;
    padding: 10px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.others.pannelBaseColor};
    
    @media (max-width: 440px) {
      min-width: 85vw;
    }

    & > button {
      width: 30px;
      height: 30px;
      background-color: ${({ theme }) => theme.colors.text.title};
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    & > img{
      width: 100px;
      height: 100px;
      margin: auto;
    }
  
    & > p{
      text-align: center;
      font-size: 1.2em;
      margin: 16px;
      color: ${({theme})=>theme.colors.text.textSection};
    }
  }

`;

export const TecnologyName = styled.span`
  margin: 0 auto;
  padding: 4px;
  color: ${({ theme }) => theme.colors.text.textSection};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text.title};
  font-weight: bold;
  font-size: 1.4em;
  text-align: center;
`