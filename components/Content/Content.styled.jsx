import styled from "@emotion/styled";

export const StyledContent = styled.div`
//   background-color: #b1b1b1;
  background-color:  antiquewhite;
  border-left: 6px solid var(--primaryGrey);
  border-right: 6px solid var(--primaryGrey);
//   border-radius: 20px;
  min-width: 100%;
//   background-color: rgb(0,0,0,0.5);
// background-color: #ffffff38;
`;

export const TransparentLayout = styled.div`
  margin: 70px;
//   background-color: rgb(0,0,0,0.5);
// background-color: #b1b1b1;
`;

export const WindowBar= styled.div`
z-index: 2;

background-color: #ffc68f;
padding: 0 30px 0 30px;
border: 6px solid var(--primaryGrey);
width: 100%;
height: 70px;
border-start-end-radius: 20px  ;
border-start-start-radius: 20px  ;
border-bottom:6px solid var(--primaryGrey) ;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
`