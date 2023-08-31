import React, { useState } from "react";
import {
  DecoratedText,
  DetailsOuterDiv,
  ExternalIntroDiv,
  HelloDiv,
  ImageDiv,
  IntroDescription,
  IntroDetailsBox,
  IntroDiv,
  IntroEmoji,
  IntroPic,
  Nameh1,
  StyledAnimatedImage,
} from "./IntroSection.styled";
import introImage from "../../../public/assets/images/intro-image.jpg";
import { useSpring } from "@react-spring/web";
import orangeHat from "../../../public/assets/images/pamela-hat.png";


const IntroSection = () => {
  const [shownhat, setHat] = useState(false);
  const show = useSpring({
    opacity: shownhat ? 1 : 0,
    display: shownhat ? "inline-block" : "none",
  });

  return (
    <ExternalIntroDiv>
      <IntroDiv id="intro">
        <IntroDetailsBox>
          <DetailsOuterDiv>
            <div className="relative">
              
              <HelloDiv>Hello, I&apos;m</HelloDiv>
             
              <Nameh1>Sarah Salem</Nameh1>
              <StyledAnimatedImage
                style={{
                  opacity: show.opacity,
                }}
                alt="profile pic"
                src={orangeHat}
                width="70"
                height="70"
              />
            </div>

            <IntroDescription font="calc(9px + 0.01vw)" lineHeight={true}>
              A Front-End Web Developer
            </IntroDescription>

            <IntroDescription
              font="calc(9.5px + 0.4vw)"
              makeMargin={true}
              letterSpacing="true"
              lineHeight={true}
            >
              A<DecoratedText color="#ce7e31"> Software Engineer</DecoratedText>{" "}
              and a recent{" "}
              <IntroEmoji>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/96/000000/student-female.png"
                  alt="student-female"
                />
              </IntroEmoji>{" "}
              from the frontend bootcamp at{" "}
              <a
                href="https://www.re-coded.com/"
                target="_blank"
                style={{ color: "#fb5456" }}
              >
                <DecoratedText color="#fb5456" >
                  Re:coded
                </DecoratedText>
              </a>{" "}
              in Yemen,this is my first portfolio that I&apos;ve made and
              I&apos;m looking forward to enhance it{" "}
              <IntroEmoji>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/48/maintenance.png"
                  alt="maintenance"
                />
              </IntroEmoji>{" "}
              and fill it with my future projects
              <IntroEmoji>
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/color/48/sparkling.png"
                  alt="sparkling"
                />
              </IntroEmoji>
              .
            </IntroDescription>
          </DetailsOuterDiv>
        </IntroDetailsBox>
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
