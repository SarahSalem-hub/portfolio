import styled from "@emotion/styled";
import Image from "next/image";

export const ProjsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction : column;
  gap : 135px;
  align-items: center;
  padding : 60px 100px 60px 100px;


  // background-color: red;
`;

export const ProjContainer= styled.div`
display: flex;
flex-direction: column;
border: 5px solid var(--primaryGrey);
border-radius: 20px;
background-color: bisque;
position: relative;
transition: transform 250ms;

&:hover {
  box-shadow: 16px 16px 0 #252830;
  transform: translate(-10px,-10px);
 
  // cursor: pointer;
 
}

`
export const DivPro = styled.div`
// padding: 50px 100px 0 100px ;
// display: grid; 
// grid-auto-columns: 1fr; 
// grid-template-columns: auto 1fr; 
// gap: 0px 0px; 
padding: 20px;
`
export const ProImg = styled.img`
border-radius: 2px;
box-shadow: 5px 15px 15px #656363;
`

export const ProDetails = styled.div`
padding : 60px 5% 0 5%;
display: flex;
justify-content: space-between;
flex-direction: column;

`
export const Title = styled.p`
font-size: 20px;
color: #383f54;
margin-left: 10px;
`
export const ProWindowBar= styled.div`
background-color: #ffc68f;
padding: 0 30px 0 30px;

width: 100%;
height: 70px;
border-start-end-radius: inherit;
border-start-start-radius: inherit;
border-bottom: inherit;
display: flex;
justify-content: space-between;
align-items: center;
`

export const ProSectionHeader= styled.p`
font-size: 25px;
color: #383f54;
// margin-left: 10px;
// padding: 60px;
// display: flex;
// justify-content: center;
z-index: 1;
position: absolute;
`

export const ProWindow = styled.div`
padding: 5px 5px 50px 5px;
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;

@media only screen and (max-width: 1024px){

  display: grid;
 grid-template-columns: 1fr ;
//  grid-template-rows : 1fr 1fr;
  width: 100%;

}
`