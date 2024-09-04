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
  overflow: hidden;
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

//// list view folder

export const ListFolder = styled.div`
  /* background-color: #be81be; */
  width: 100%;
  height: 100%;

  /* flex-direction: row; */
  overflow-x: auto;

  table {
    margin: 5px 0 0 5px;
    max-width: 500px;
    /* max-width: 700px; */
    width: 300px;
    /* height: 100%; */
    overflow-x: scroll;
    /* display: table; */
    table-layout: fixed;
    /* width: 300px; */
    /* border-collapse: collapse; */
    text-align: left;

 
  }

  thead {
    /* background: rgb(113, 113, 113); */
    /* margin: 40px; */
    position: sticky;
    top: 0;
    /* background-color: white; */
    left: 0;
    z-index: 1;
    background-color: rgb(214 204 192);
    /* background-color: red; */

    #dividerRow {
      height: 1px;
      padding: 0;
      background-color: black;
    }
  }

  tbody {
    margin: 5px 0 0 5px;
    tr:nth-child(odd) {
      /* background-color: black; */
      /* color: white; */
    }

    tr:nth-child(even) {
      background-color: #ffffff56;
      border-radius: 25%;
      color: black;
    }
  }
  td {
    padding: 5px 10px;
    height: 36px;

    a {
      color: #2e6d9e;
    }
  }

  th {
    width: 220px;
    max-width: 500px;
    padding-left: 10px;
    padding-bottom: 5px;

    /* :last-child{
      background-color: red;
      width: 100%;
    } */
  }

  .column {
    position: relative;
  }

  .resizer {
    background: transparent;
    cursor: col-resize;

    position: absolute;
    top: 0;
    right: 0;

    height: 100%;
    width: 0.25rem;
    &::after {
      content: "|";
      font-size: 15px;
      color: #0000003a;
      font-weight: 300;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      top: 0;
      bottom: 0; /* Covers the full height of the element */
      width: 10px;
      height: 100%;
    }
  }
  .resizer:hover {
    background: rgb(99 102 241);
  }
  /* th:first-child, */
  td:first-child,
  tr:first-child {
    border-radius: 10px 0 0 10px;
  }

  /* th:last-child, */
  td:last-child,
  tr:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
export const ListFolderItem = styled.tr`
  
`;

export const IconAndTitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: hidden; /* Hides overflowing text */
  text-overflow: ellipsis;
  /* max-width: 150px; */

  #text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  /* &:after{
    content: "";

    position: absolute;
    bottom: 0;
    right: 0;
    height: 1.5rem;
    width: 25%;
    border-radius: 50%;
    background: linear-gradient(to right, transparent, #ffffff57);
  } */
`;
export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const CategoryBox = styled.div`
  width: fit-content;
  padding-inline: 3px;
  background-color: ${props => props.backgColor};
  border-radius: 5px;
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
