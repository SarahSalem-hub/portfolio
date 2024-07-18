import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const moveToCenter = keyframes`
  0% {
    top: var(--start-top);
    left: var(--start-left);
    right: var(--start-right);
  }
  100% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const moveToEdge = keyframes`
  0% {
    top: var(--start-top);
    left: var(--start-left);
    transform: translate(0, 0);
  }
  100% {
    left: calc(var(--start-left) - 20px);
    transform: translate(0, 0);
  }
`;

const moveToRight = keyframes`
  0% {
    top: var(--start-top);
    left: var(--start-left);
    transform: translate(0, 0);
  }
  100%{
    left: calc(var(--start-left) + 50px);
    transform: translate(0, 0);
  }

`;
const moveToTop = keyframes`
  0% {
    top: var(--start-top);
    left: var(--start-left);
    transform: translate(0, 0);
  }
  100%{
    top: calc(var(--start-top) - 10px);
    transform: translate(0, 0);
  }

`;

export const SmallWinWrapper = styled.div`
  width: 800px;
  height: 510px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0px 0px;
  position: fixed;
  /* transition: top 2s ease-in-out, left 2s ease-in-out; */
  /* top: 50%;
  left: 50%; */
  top: ${(props) => props.position.top}%;
  left: ${(props) => props.position.left}%;
  /* transform: translate(-${(props) => props.position.left}%, -${(props) =>
    props.position.left}%); */
  transform: translate(-50%, -50%);
  z-index: 10;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media screen and (max-width: 800px) {
    width: 60%;
  }

  filter: drop-shadow(0px 0px 26px rgb(0 0 0 / 0.4));
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(36px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  /* resize: horizontal;
  overflow: auto; */
`;

export const FolderSidebar = styled.div`
  height: inherit;
  border-bottom-left-radius: inherit;
  border-top-left-radius: inherit;
  display: flex;
  flex-direction: column;
`;
export const FolderContentDiv = styled.div`
  height: inherit;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  flex-direction: column;
`;

export const ContentSideBar = styled.div`
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 120px;
  grid-template-columns: repeat(auto-fill, 90px);
  gap: 2px 15px;
  padding: 7px;
  overflow-y: auto;
  /* @media only screen and (max-width: 700px) {
    /* height: inherit; */
  /* grid-auto-flow: row; 
    grid-template-columns: repeat(auto-fill, 90px); 
    overflow: hidden;
    overflow-y: scroll
  } */
`;

export const FolderTitle = styled.div`
  height: 10%;
  width: 100%;
  background: rgba(255, 255, 255, 0.168);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-top-right-radius: inherit;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  color: #0b0b0b;
  font-weight: 700;
`;

export const CircleDiv = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: ${(props) => props.backgroundColor};

  & div:first-child {
    display: none;
    cursor: pointer;
  }
`;

export const SmallWinBar = styled.div`
  width: 100%;
  height: 10%;
  border-start-end-radius: inherit;
  border-start-start-radius: inherit;
  display: flex;
  justify-content: start;
  align-items: center;
  /* border-bottom: 3px solid var(--primaryGrey); */
  padding-inline: 10px;
  background: rgba(255, 255, 255, 0.168);

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    ${CircleDiv}> div {
      display: inline-block;
    }
  }
  @media only screen and (max-width: 700px) {
    & div:nth-child(2),
    div:nth-child(3) {
      display: none;
    }
    & div:first-child {
      display: inline-block;
    }
  }
`;

export const WindowSideBar = styled.div`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  /* background-color: #5399d6; */
  height: 100%;
  background: rgba(255, 255, 255, 0.168);
`;
export const SideBarItem = styled.div`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  display: flex;
  white-space: nowrap;
  color: ${(props) => (props.selected ? "#ffffffcf" : "#0000008e")};
  ${(props) =>
    props.selected
      ? css`
          /* background: linear-gradient(
            90deg,
            rgba(255, 198, 143, 0.6041010154061625) 11%,
            rgba(239, 120, 125, 0.6041010154061625) 52%,
            rgba(58, 65, 86, 0.6012998949579832) 88%
          );
          outline: 1px solid #9f9d9d82; */
          /* color: #292e3e; */
          
          /* border-radius: 5px;
          padding-inline: 5px; */
          /* margin: 0; */
          color: #c02e35;
        `
      : css``}
  cursor: pointer;
  /* color: #d9d9c8cf; */
  /* @media screen and (max-width: 750px) {
    
    white-space: nowrap;
  } */

  @media screen and (max-width: 700px) {
    width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PreviousNextDiv = styled.div`
  /* background-color: aqua; */
  /* width: 40px; */
  display: flex;
  justify-content: center;
  margin-right: 2px;
`;

/*
  /* ${(props) =>
    props.top &&
    css`
      --start-top: ${props.top}px;
      top: ${props.top}px;
    `}
  ${(props) =>
    props.left &&
    css`
      --start-left: ${props.left}px;
      left: ${props.left}px;
    `}
    ${(props) =>
    props.right &&
    css`
      --start-left: calc(100% - ${props.right}px - 300px);
      left: calc(100% - ${props.right}px - 300px);
    `} */
/* ${(props) => {
    if (props.smallWinClicked) {
      return css`
        animation: ${moveToCenter} 2s forwards;
        animation-play-state: running;
        z-index: 90;
      `;
    } else {
      return css`
        animation: ${moveToEdge} 2s forwards;
        background-color: green;
        z-index: 90;
      `;
    }
  }} */
/* ${(props) => {
    if (!props.smallWinClicked && props.right) {
      return css`
        animation: ${moveToRight} 2s forwards;
        background-color: #933e3e;
        z-index: 90;
      `;
    }
  }}
  ${(props) => {
    if (!props.smallWinClicked && props.side === "top") {
      return css`
        animation: ${moveToTop} 2s forwards;
        background-color: #3e6093;
      `;
    }
  }} 
*/
