import styled from "@emotion/styled";
import { animated } from "@react-spring/web";
import Image from "next/image";

export const ExternalIntroDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;  
  margin-bottom: 100px;
  @media only screen and (max-width: 1024px) {
    height: 100%;
    padding-top: 152px;
  }
`

export const IntroDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  max-width: 1500px;
  gap: 40px 30px ;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const NameDiv = styled.div`
  flex: 3;
  display: flex;
  text-shadow: 4px 5px 6px rgb(0 0 0 / 20%);
  align-items: start;
  flex-direction: column;
  color: #383f54;
  letter-spacing: 8px;
  justify-content: center;

  h1 {
    font-size: 60px;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 50px;
    }
    
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IntroPic = styled(Image)`
  border-radius: 200px;
  width: 100%;
  box-shadow: 26px 5px 32px #707070;
  
`;

const AnimatedImage = animated(Image);
export const StyledAnimatedImage = styled(AnimatedImage)`
  position: absolute;
  left: -23px;
  top: 2px;
  z-index: 2;
  transform: rotate(-62deg);
`;
