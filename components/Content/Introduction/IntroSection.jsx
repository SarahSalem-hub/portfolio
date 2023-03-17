// import { mynerve, pS2P, sacramento } from "@/pages/_app";
import Image from "next/image";
import React, { useState } from "react";
import {
  ImageDiv,
  IntroDiv,
  IntroImage,
  IntroPic,
  NameDiv,
  StyledAnimatedImage,
} from "./IntroSection.styled";
import introImage from "../../../public/assets/images/intro-image.jpg";
import hat from "../../../public/assets/images/001-hermes.png";
import { useSpring, animated } from "@react-spring/web";
import styled from "@emotion/styled";
import yellowHat from "../../../public/assets/images/001-pamela-hat.png";
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
    <IntroDiv>
      <NameDiv>
        <div className="relative">
          <p className="text-center "> Hello, I&apos;m</p>
          <h1 className={sacramento.className} style={{ fontSize: "60px" }}>
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
          I&apos;m a student in the front-end bootcamp at <a href="https://www.re-coded.com/" target="_blank" style={{color:"#fb5456;"}}>Recoded </a> 
           in Yemen,this is my first portfolio that I&apos;ve made and I&apos;m looking forward to enhance it
           and fill it with my future projects. 
        </p>
      </NameDiv>
      <ImageDiv>
        <IntroPic
          onMouseEnter={() => setHat(true)}
          onMouseLeave={() => setHat(false)}
          src={introImage}
          width="360"
          quality={70}
        />
      </ImageDiv>
    </IntroDiv>
  );
};

export default IntroSection;
