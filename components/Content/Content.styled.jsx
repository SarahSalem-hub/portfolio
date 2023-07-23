import styled from "@emotion/styled";

export const StyledContent = styled.div`
  height: ${props => props.setHeight ? "100vh" :null};
  background-color: antiquewhite;
  border-left: 6px solid var(--primaryGrey);
  border-right: 6px solid var(--primaryGrey);
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
  display: flex;
  justify-content: center;
`;

export const TransparentLayout = styled.div`
width: 100%;
display: flex;
/* justify-content: center;
align-content: center; */
flex-direction: column;
max-width: 1500px;
height: 100%;
/* background-color: green; */
  /* padding: 0 70px 70px 70px; */
`;

export const WindowBar = styled.div`
  z-index: 100;
  background-color: #ffc68f;
  /* padding: 0 30px 0 30px; */
  padding-inline: calc(12px + 2vw);
  border: 6px solid var(--primaryGrey);
  width: 100%;
  height: 70px;
  border-start-end-radius: 20px;
  border-start-start-radius: 20px;
  border-bottom: 6px solid var(--primaryGrey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

   svg{
        width: 30px;
        /* background-color: #d9fad7; */
    }

`;
