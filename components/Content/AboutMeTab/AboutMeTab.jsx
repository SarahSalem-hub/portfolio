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
import { CircularProgress } from "@mui/material";

let linkedInLink = "https://www.linkedin.com/in/sarah-al-dhaferi-980270277/";
let githubLink = "https://github.com/SarahSalem-hub";

function AboutMeTab({ setOverlape, likes }) {
  const [fillHeart, setFillHeart] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);
  const [hitInterestingBut, setHitInterestingBut] = useState(false);
  const [likess, setLikess] = useState();

  function fillHeartFun() {
    setHitInterestingBut(true);
  
    if (fillHeart) {
      localStorage.setItem("heartChecker", JSON.stringify(false));
    } else {
      localStorage.setItem("heartChecker", JSON.stringify(true));
      
    }
  }
 
  function returnCirularComp(){
    return <CircularProgress style={{padding: "10px"}} color="inherit" />
  }

  useEffect(() => {
    const getHeartChecker = JSON.parse(localStorage.getItem("heartChecker"));
    setFillHeart(getHeartChecker);
    setButtonColor(getHeartChecker);
    
  }, [likess]);

  useEffect(() => {
    const timer = setTimeout(() => setHitInterestingBut(false), 1000);
    return () => {clearTimeout(timer)};
  }, [hitInterestingBut])
  
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
                <BiMenu size={20} />
              </AccountIcons>
            </AccountHeader>
            <ProfileInfo>
              <ProfilePicDiv>
                <img src="/assets/images/intro-image.jpg" alt="" />
              </ProfilePicDiv>
              <ProfileStatistics>
                <SingleStatistic>
                  <div>
                    {hitInterestingBut ? returnCirularComp() : likess}
                  </div>
                  <div>
                  {fillHeart ? (
                      <AiFillHeart size={20} />
                    ) : (
                      <AiOutlineHeart size={20} />
                    )}
                  </div>
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
              <SingleBioInfo>Money 🤑 Seeker !</SingleBioInfo>
              <SingleBioInfo>Life 💪😎 survival!</SingleBioInfo>
            </BioDiv>
            <ButtonsDiv>
             

              <ProfileButton buttonColor={buttonColor} 
              onClick={fillHeartFun}
              disabled = {hitInterestingBut}
              >
                <LikeButton
                  id="do-you-like-my-profile"
                  namespace="aboutMeTab"
                  hideCounterIfLessThan={0}
                  disabled = {hitInterestingBut}
                >
                  {({ handlePress, totalLikes }) => (
                    <>
                      
                      {hitInterestingBut? 
                        <CircularProgress style={{padding: "10px"}} color="inherit" />
                        : 
                        <div onClick={handlePress}>Interesting! 🤩</div> 
                      }
                      
                      {setLikess(totalLikes)}
                    </>
                  )}
                </LikeButton>
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

