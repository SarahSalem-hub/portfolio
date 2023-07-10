import React from "react";
import { SkillsDiv } from "../../../sections/Skills/Skills.styled";
import {
  AccountHeader,
  AccountIcons,
  AccountName,
  BehindTabDiv,
  BehindTabLayout,
  BioDiv,
  Bullet,
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

let linkedInLink = "https://www.linkedin.com/in/sarah-al-dhaferi-980270277/";
let githubLink = "https://github.com/SarahSalem-hub";

function AboutMeTab({ setOverlape }) {
  return (
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
              <TfiHeart size={17} />
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
                  {/* <div>4</div> */}
                  <EmojiSize size="19px">4</EmojiSize>
                  <div>Frontend projects</div>
                </div>
              </SingleStatistic>
              <SingleStatistic>
                {/* <div>👼</div> */}
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
            {/* <SingleBioInfo>Re:coded Graduate</SingleBioInfo> */}
            <SingleBioInfo>Bug 👾 fighter ! </SingleBioInfo>
            <SingleBioInfo>Money 🤑 Seeker !</SingleBioInfo>
            <SingleBioInfo>Life 💪😎 survival!</SingleBioInfo>
          </BioDiv>
          <MessageDiv>
            <MessageButton
              onClick={() =>
                setOverlape({ frontTab: 0, BehindTab: 0, contactTab: 1 })
              }
            >
              Message
            </MessageButton>
          </MessageDiv>
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
  );
}

export default AboutMeTab;
