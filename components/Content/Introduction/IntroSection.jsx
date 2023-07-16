import React, { useState } from "react";
import {
  DetailsInnerDiv,
  DetailsOuterDiv,
  ExternalIntroDiv,
  HelloDiv,
  ImageDiv,
  IntroDescription,
  IntroDetailsBox,
  IntroDiv,
  IntroPic,
  NameDiv,
  Nameh1,
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
        <IntroDetailsBox>
          <DetailsOuterDiv>
            <div className="relative">
              {/* <p className="text-center "> Hello, I&apos;m</p> */}
              <HelloDiv>Hello, I&apos;m</HelloDiv>
              {/* <h1 className={sacramento.className} >
            Sarah Salem
          </h1> */}
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

            <IntroDescription font="calc(9px + 0.01vw)" >
              A Junior Front-End Web Developer
            </IntroDescription>

            <IntroDescription
              font="calc(8px + 0.3vw)"
              makeMargin={true}
              letterSpacing={true}
              lineHeight={true}
            >
              I&apos;m a graduate from the front-end bootcamp at{" "}
              <a
                href="https://www.re-coded.com/"
                target="_blank"
                style={{ color: "#fb5456" }}
              >
                Recoded{" "}
              </a>
              in Yemen,this is my first portfolio that I&apos;ve made and
              I&apos;m looking forward to enhance it and fill it with my future
              projects.
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
