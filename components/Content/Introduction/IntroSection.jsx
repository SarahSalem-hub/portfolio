import React, { useState } from "react";
import {
  ExternalIntroDiv,
  ImageDiv,
  IntroDiv,
  IntroPic,
  NameDiv,
  StyledAnimatedImage,
} from "./IntroSection.styled";
import introImage from "../../../public/assets/images/intro-image.jpg";
import { useSpring } from "@react-spring/web";
import orangeHat from "../../../public/assets/images/pamela-hat.png";
import { pS2P, sacramento } from "@/components/fonts";

const IntroSection = () => {
  const [shownhat, setHat] = useState(false);
  const show = useSpring({
    opacity: shownhat ? 1 : 0,
    display: shownhat ? "inline-block" : "none",
  });
  // console.log(show);
  return (
    <ExternalIntroDiv>
    <IntroDiv id="intro">
      <NameDiv>
        <div className="relative">
          <p className="text-center "> Hello, I&apos;m</p>
          <h1 className={sacramento.className} >
            Sarah Salem
          </h1>
          <StyledAnimatedImage
            style={{
              opacity: show.opacity,
            }}
            src={orangeHat}
            width="70"
            height="70"
          />
        </div>

        <p
          className={pS2P.className}
          style={{ fontSize: "10px", marginBottom: "30px" }}
        >
          A Junior Front-End Web Developer
        </p>

        <p
          className={pS2P.className}
          style={{ fontSize: "15px", marginBottom: "30px",margin:"40px 0 0 0 ",letterSpacing: "normal",lineHeight:"35px" }}
        >
          I&apos;m a graduate from the front-end bootcamp at <a href="https://www.re-coded.com/" target="_blank" style={{color:"#fb5456"}}>Recoded </a> 
           in Yemen,this is my first portfolio that I&apos;ve made and I&apos;m looking forward to enhance it
           and fill it with my future projects. 
        </p>
      </NameDiv>
      <ImageDiv>
        <IntroPic
          alt="portfolio intro section picture"
          onMouseEnter={() => setHat(true)}
          onMouseLeave={() => setHat(false)}
          src={introImage}
          width="0"
          quality={70}
        />
      </ImageDiv>
    </IntroDiv>
    </ExternalIntroDiv>
  );
};

export default IntroSection;
