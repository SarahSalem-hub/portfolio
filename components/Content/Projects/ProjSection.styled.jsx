import styled from "@emotion/styled";
import Image from "next/image";
import { Fredoka } from "@/components/fonts";

export const ProjectsSectionDiv = styled.div`
  width: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FolderIconDiv = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
  filter: drop-shadow(6px 5px 5px rgba(0, 0, 0, 0.5));
  /* background-color: red; */
`;

export const ProjsDiv = styled.div`
  width: 90%;
  height: 60%;
  /* background-color: green; */
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  /* gap: 0px 0px;  */
  place-items: center;
  /* margin : 0 100px 60px 100px; */
  gap: 30px 30px;
  padding-bottom: 80px;

  @media only screen and (max-width: 740px) {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const ProjContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid var(--primaryGrey);
  border-radius: 20px;
  background-color: bisque;
  position: relative;
  transition: transform 250ms;
  width: 80%;
  /* height: 500px; */

  a {
    height: 100%;
  }

  &:hover {
    box-shadow: 16px 16px 0 #252830;
    transform: translate(-10px, -10px);

    // cursor: pointer;
  }
`;

export const ImageAndDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  height: 100%;
  /* background-color: red; */
`;

export const ProjImageDiv = styled.div`
  // padding: 50px 100px 0 100px ;
  // display: grid;
  // grid-auto-columns: 1fr;
  // grid-template-columns: auto 1fr;
  // gap: 0px 0px;
  /* width: 100%; */
  /* position: absolute; */
  /* height: 308px; */
  width: 100%;
  /* object-fit: cover; */

  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
`;
export const ProImg = styled.img`
  /* width: 400px;
 height: 231px; */

  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 15px;
  box-shadow: 5px 15px 15px #656363;
`;

export const ProjLoadingDiv = styled.div`
  width: 100%;
  height: 231px;
  /* object-fit: cover;
 object-position: 50% 50%;
  border-radius: 2px; */
  box-shadow: 5px 15px 15px #656363;
`;

export const ProDetails = styled.div`
  padding: 30px 5% 0 5%;

  /* background-color: aliceblue; */
  /* display: flex;
  justify-content: space-between;
  flex-direction: column; */
  /* background-color: green; */
`;

export const Title = styled.div`
  font-size: ${(props) => (props.font ? "calc(props.font + 0.4vw)" : "calc(13px + 0.5vw)")};
  color: #383f54;
  margin-left: ${(props) => (props.margin ? "0px" : "10px")};
  display: flex;
  align-items: center;
  font-family: ${Fredoka.style.fontFamily};
  line-height: normal;
`;
export const ProWindowBar = styled.div`
  background-color: #ffc68f;
  /* padding: 0 0 0 20px; */
  
  width: 100%;
  height: 70px;
  border-start-end-radius: 18px;
  border-start-start-radius: 18px;
  border-bottom: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    svg {
    width: 25px;
  }
  }
`;

export const ProBarName = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 20px;
`

export const ProSectionHeader = styled.p`
  font-size: 25px;
  color: #383f54;
  font-family: ${Fredoka.style.fontFamily};
  // margin-left: 10px;
  // padding: 60px;
  // display: flex;
  // justify-content: center;
  z-index: 1;
  position: absolute;
`;

export const ProWindow = styled.div`
  /* padding: 5px 5px 50px 5px; */
  width: 100%;
  /* background-color:#00ff77; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    /* display: grid;
    grid-template-columns: 1fr; */
    //  grid-template-rows : 1fr 1fr;
    width: 100%;
  }
`;

export const LinksDiv = styled.div`
  /* flex flex-row justify-end */
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  /* align-content: end; */
  /* align-content: end; */
  /* height: 100%; */
  height: 70px;
  width: 100%;
  /* background-color: yellow; */

  & a{
    height: auto;
  }

  & div:first-of-type{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: aliceblue; */
  }
`;

export const UrlTitle = styled.div`
  font-size: ${(props) => (props.font ? props.font : "20px")};
  color: #383f54;
  margin-left: ${(props) => (props.margin ? "0px" : "10px")};
  display:inline-block;
  font-family: ${Fredoka.style.fontFamily};
  width: 191px;
  /* width: 150px ; */
  white-space: nowrap;
  @media only screen and (max-width: 600px) {
    text-align: left;
  direction: rtl;
  text-overflow: ellipsis;
  overflow: hidden;
  }
`;