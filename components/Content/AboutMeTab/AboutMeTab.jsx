import React, { useEffect, useState } from "react";
import { SkillsDiv } from "../../../sections/Skills/Skills.styled";
import {
  AccountHeader,
  AccountIcons,
  AccountName,
  BehindTabDiv,
  BehindTabLayout,
  BioDiv,
  Bullet,
  ButtonsDiv,
  CurveyLine,
  CustomBullet,
  EduAndLine,
  Education,
  EducationDiv,
  EmojiSize,
  InstagramAccountDiv,
  LinkPic,
  LinksPicsDiv,
  MessageButton,
  MessageDiv,
  ProfileButton,
  ProfileInfo,
  ProfilePicDiv,
  ProfileStatistics,
  SingleBioInfo,
  SingleEducation,
  SingleInfo,
  SingleStatistic,
} from "./AboutMeTab.styled";
import { BiMenu, BiLockAlt } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TfiHeart } from "react-icons/tfi";
import Link from "next/link";
import { BiInfinite } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { fetchLikes, updateLikes } from "@/utils/firebase";
import { LikeButton, Provider } from "@lyket/react";
import { CircularProgress, Divider } from "@mui/material";
import { GoLightBulb } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { Image, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

let linkedInLink = "https://www.linkedin.com/in/sarah-al-dhaferi-980270277/";
let githubLink = "https://github.com/SarahSalem-hub";

function AboutMeTab({ setOverlape }) {
  const [heartClicked, setHeartClicked] = useState(0);
  const [fillHeart, setFillHeart] = useState(false);
  const { promiseInProgress } = usePromiseTracker();


  function interestingButton() {
    // setButtonColor((prev) => !prev);
    
  
    if (fillHeart) {
      localStorage.setItem("heartChecker", JSON.stringify(false));
      updateLikes(heartClicked, "-");
      trackPromise(LikesFetching());
    } else {
      localStorage.setItem("heartChecker", JSON.stringify(true));
      updateLikes(heartClicked, "+");
      trackPromise(LikesFetching());
    }
  }

  async function LikesFetching() {
    await fetchLikes().then((data) => setHeartClicked(data[0]?.count));
  }

  useEffect(() => {
    const getHeartChecker = JSON.parse(localStorage.getItem("heartChecker"));
    trackPromise(LikesFetching());
    setFillHeart(getHeartChecker);
    // setButtonColor(getHeartChecker);
    // LikeAPI();
  }, [heartClicked]);

  return (
    <Provider apiKey="pt_b7bab4420735512aad14ebb2e3af3d">
      <BehindTabDiv>
        <InstagramAccountDiv>
          <div>
            <AccountHeader>
              <AccountName>
                <FaLock />
                Sarah
                <IoIosArrowDown />
              </AccountName>
              <AccountIcons>
                <Popup
                  content={
                    'Welcome! \nthis is my simple portfolio website, I hope you ❤️ it ! \n \nI truly would want to see your review by clicking the "interesting" button down there ↙️ '
                  }
                  key="0"
                  header="Hello there!"
                  trigger={
                    <Image
                      src="/assets/images/wired-lineal-1872-small-cute-monster (1).gif"
                      alt=""
                    />
                  }
                  position="bottom right"
                  style={{
                    whiteSpace: "pre-wrap",
                  }}
                />
              </AccountIcons>
            </AccountHeader>
            <ProfileInfo>
              <ProfilePicDiv>
                <img src="/assets/images/intro-image.jpg" alt="" />
              </ProfilePicDiv>
              <ProfileStatistics>
                <SingleStatistic>
                  <div>
                    {!promiseInProgress ? (
                      heartClicked
                    ) : (
                      <CircularProgress
                        style={{ padding: "10px" }}
                        color="inherit"
                      />
                    )}
                  </div>
                  <div>
                    {/* Love */}
                    {fillHeart ? (
                      <AiFillHeart size={20} />
                    ) : (
                      <AiOutlineHeart size={20} />
                    )}
                  </div>
                  {/* </div> */}
                </SingleStatistic>
                <SingleStatistic>
                  <EmojiSize size="25px">👼</EmojiSize>
                  <div>Experience</div>
                </SingleStatistic>
                <SingleStatistic>
                  <EmojiSize>
                    <BiInfinite size={25} />
                  </EmojiSize>
                  <div>Code Lines</div>
                </SingleStatistic>
              </ProfileStatistics>
            </ProfileInfo>
            <BioDiv>
              <SingleBioInfo>Bug 👾 fighter ! </SingleBioInfo>
              <SingleBioInfo>Life 💪😎 survival!</SingleBioInfo>
              <SingleBioInfo>DM for Web Development 📥</SingleBioInfo>
            </BioDiv>
            <ButtonsDiv>
              <ProfileButton
                buttonColor={fillHeart}
                disabled={promiseInProgress}
                onClick={() => {
                  interestingButton();
                }}
              >
                Interesting! 🤩
              </ProfileButton>
              <ProfileButton
                onClick={() =>
                  setOverlape({ frontTab: 0, BehindTab: 0, contactTab: 1 })
                }
              >
                Message
              </ProfileButton>
            </ButtonsDiv>
            <LinksPicsDiv>
              <Link href={linkedInLink} target="_blank">
                <LinkPic>
                  <img src="/assets/images/linkedin.svg" alt="linkdin" />
                </LinkPic>
              </Link>
              <Link href={githubLink} target="_blank">
                <LinkPic>
                  <img src="/assets/images/github.svg" alt="github" />
                </LinkPic>
              </Link>
            </LinksPicsDiv>
          </div>
        </InstagramAccountDiv>
      </BehindTabDiv>
    </Provider>
  );
}

export default AboutMeTab;
