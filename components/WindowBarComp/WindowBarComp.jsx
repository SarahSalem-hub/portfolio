import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { WindowBar } from "../Content/Content.styled";
import { UrlTitle } from "@/components/Content/Projects/ProjSection.styled";
import { FaCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import {
  UrlContainer,
  UrlDiv,
  UrlMenu,
  WindowClosingDiv,
  WindowIconlinkUrL,
} from "./WindowBarComp.styled";
import { UserContext } from "@/pages/_app";

function WindowBarComp({ urlName, isActive, setActive, setUrlName }) {
  const { projectSection,tabs,activeTab} = useContext(UserContext);
  const [projectSectionY, setprojectSectionY] = useState();
  const [projectSectionHeight, setprojectSectionHeight] = useState();
  const [tabsY, setTabsY] = useState();
  const [tabsHeight, setTabsHeight] = useState();


  const getProjectsPosition = () => {
    const y = projectSection.current?.offsetTop;
    setprojectSectionY(y);
    const height = projectSection.current?.offsetHeight;
    setprojectSectionHeight(height);
  };
  const getTabsPosition = () => {
    const y = tabs.current?.offsetTop;
    setTabsY(y);
    const height = tabs.current?.offsetHeight;
    setTabsHeight(height);
  };

  function checkURLName() {
    if (typeof window !== "undefined") {
      if (
        window.scrollY >= projectSectionY - 150 &&
        window.scrollY <= projectSectionY + projectSectionHeight
      ) {
        setUrlName("SarahSalem.com/projects");
      } else if (
        window.scrollY >= tabsY - 300 &&
        window.scrollY <= tabsY + tabsHeight - 50
      ) {
        setUrlName(`SarahSalem.com/${activeTab}`);
      } else {
        setUrlName("SarahSalem.com");
      }
    } else {
      setUrlName("SarahSalem.com");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkURLName);
  }, [urlName, projectSectionY]);

  useEffect(() => {
    getProjectsPosition();
    getTabsPosition();
    window.addEventListener("scroll", getProjectsPosition);
    window.addEventListener("scroll", getTabsPosition);
  }, []);

  useEffect(() => {
    checkURLName();
  }, [activeTab]);

  return (
    <WindowBar>
      <WindowIconlinkUrL>
        <FaCode className="Icon" size={40} />

        {/* <UrlContainer onMouseEnter={() => setActive(true)}> */}
        <UrlDiv>
          <UrlTitle font="18px">{urlName}</UrlTitle>
          {/* {isActive && (
              <UrlMenu onMouseLeave={() => setActive(false)}>
                <Link href="/">
                  <li>
                    <Title font="18px">SarahSalem.com/Home</Title>
                  </li>
                </Link>
                <Link href="/About">
                  <li>
                    <Title font="18px">SarahSalem.com/about</Title>
                  </li>
                </Link>
                <Link href="/Projects">
                  <li>
                    <Title font="18px">SarahSalem.com/projects</Title>
                  </li>
                </Link>
              </UrlMenu>
            )} */}
        </UrlDiv>
        {/* </UrlContainer> */}
      </WindowIconlinkUrL>
      <WindowClosingDiv>
        <FiMinus className="Icon" size={40} />
        <IoClose className="Icon" size={40} />
      </WindowClosingDiv>
    </WindowBar>
  );
}

export default WindowBarComp;
