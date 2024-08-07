import styled from "@emotion/styled";
import { animated } from "@react-spring/web";
import Image from "next/image";
import { pS2P, sacramento } from "@/components/fonts";

export const ExternalIntroDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80vh;
  margin-top: 146px;
  /* margin-bottom: 100px; */
  /* background-color: aliceblue; */
  @media only screen and (max-width: 1024px) {
    height: 100%;
    margin-top: 20px;
    padding-top: 152px;
  }
  @media only screen and (min-width: 2024px) {
    height: 800px;
    /* padding-top: 152px; */
    /* background-color: green; */
  }
`;

export const IntroDiv = styled.div`
  /* background-color: #7bff00; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  max-width: 1500px;
  gap: 40px 30px;
  position: relative;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const IntroDetailsBox = styled.div`

  flex: 3;
  display: flex;
  /* background-color: aquamarine; */
  text-shadow: 4px 5px 6px rgb(0 0 0 / 20%);
  align-items: center;
  flex-direction: column;
  color: #383f54;
  letter-spacing: 8px;
  justify-content: center;

  /* h1 {
    font-size: 60px;
  } */

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    text-align: center;

    /* h1 {
      font-size: 50px;
    } */
  }
`;

export const DetailsOuterDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  /* background-color: brown; */

  @media only screen and (max-width: 700px) {
    width: 60%;
  }
`;

export const HelloDiv = styled.div`
  text-align: center;
  font-size: calc(10px + 0.2vw);
`;

export const Nameh1 = styled.h1`
  /* background-color: firebrick; */
  font-size: calc(14px + 2.5vw);
  margin: 10px 0 5px 0;

  font-family: ${sacramento.style.fontFamily};

  @media only screen and (max-width: 700px) {
    letter-spacing: 5px;
    font-weight: 800;
  }
`;

export const IntroDescription = styled.div`
  font-size: ${(props) => props.font};
  margin: ${(props) => (props.makeMargin ? "40px 0 0 0" : null)};
  margin-bottom: 30px;
  letter-spacing: ${(props) => (props.letterSpacing ? "normal" : "4px")};
  line-height: ${(props) => (props.lineHeight ? "35px" : null)};
  font-family: ${pS2P.style.fontFamily};

  @media only screen and (max-width: 600px) {
    letter-spacing: 1px;
    font-weight: 100;
    line-height: ${(props) => (props.lineHeight ? "18px" : null)};
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  flex: 1;
  width: 200px;
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
export const IntroEmoji = styled.div`
  display: inline-block;
  padding-inline: 5px;
  justify-content: center;
  /* background-color: yellow; */
  width: 30px;
  height: 20px;
  @media only screen and (max-width: 700px) {
    /* background-color: red; */
    padding: unset;
    width: 15px;
    height: 17px;
  }
`;

export const DecoratedText = styled.p`
  display: inline;
  color: ${(props) => props.color};
`;

export const ScreenIconsDiv = styled.div`
  /* width: 100%; */
  height: 100%;
  /* background-color: #7c35bfb7; */
  position: absolute;
  right: 0px;
  /* display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end; */
  z-index: 0;

  @media only screen and (max-width: 1024px) {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
  }
`;
export const IconsContainer = styled.div`
  direction: rtl;
  /* max-width: 900px; */
  height: calc(100% - 50px);
  /* height: 100%; */
  /* background-color: #8aba83; */
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-auto-rows: 115px; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  padding-block: 10px;
  padding-right: 10px;
  /* margin-top: 5rem; */
  align-content: start ;

  
  
  @media only screen and (max-width: 1000px) {
    
    /* background-color: #c57070;  */
    width: 70%;
    height:400px;
    padding: 0;
    margin: 0;
    justify-content: start;
    align-content: center;
  }
`;
