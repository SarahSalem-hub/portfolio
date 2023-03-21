import styled from "@emotion/styled";
import { animated } from "@react-spring/web";
import Image from "next/image";
// import marobg from "../../../public/assets/images/chibi-maruko-chan.jpeg";

export const IntroDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px;
  margin-bottom: 80px;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const NameDiv = styled.div`
  flex-grow: 1;
  display: flex;
  text-shadow: 4px 5px 6px rgb(0 0 0 / 20%);
  align-items: start;
  flex-direction: column;
  color: #383f54;
  // background-color: red;
  letter-spacing: 8px;
  justify-content: center;
  // padding-left : 65px ;
  // background-color: red;

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: blue;
  padding: 50px;
  // min-width: fit-content;
  
`;

export const IntroPic = styled(Image)`
  border-radius: 200px;
  box-shadow: 26px 5px 32px #707070;
  min-width: 300px;
`;

const AnimatedImage = animated(Image);
export const StyledAnimatedImage = styled(AnimatedImage)`
  position: absolute;
  left: -23px;
  top: 2px;
  zindex: 2;
  transform: rotate(-62deg);
`;
