import React, { useContext, useEffect, useRef, useState } from "react";
import {
  BehindTab,
  BehindTabHeaderLayout,
  BoxDiv,
  BoxGlass,
  BoxHole,
  BoxItem,
  BoxLowerDiv,
  BoxUpperDiv,
  ContactTab,
  ContactTabHeaderLayout,
  FrontTab,
  FrontTabHeaderLayout,
  FrontTabLayout,
  GlassEllipse,
  GlassEllipseRight,
  GlassReflection,
  GlassReflectionRight,
  GlassRightSide,
  ItemDiv,
  SecondTab,
  SkillsDiv,
  SkillsSection,
  Tab,
  TabClosing,
  Tabs,
  TitleDiv,
  TriangleAffect,
} from "./DetailsContainer.styled";
import { IoClose } from "react-icons/io5/index.js";
// import { Title } from "../Home/details/Projects/ProjSection.styled";
import ContactFormTab from "../ContactFormTab/ContactFormTab";
import SkillsTab from "../SkillsTab/SkillsTab";
import AboutMeTab from "../AboutMeTab/AboutMeTab";
import { UserContext } from "@/pages/_app";
import { TabName } from "../../Projects/SingleProject.styled";

function DetailsContainer({ likes }) {
  const [overlape, setOverlape] = useState({
    frontTab: 0,
    BehindTab: 1,
    contactTab: 0,
  });
  const { tabs, setActiveTab } = useContext(UserContext);

  useEffect(() => {
    setActiveTab("about-me");
  }, [setActiveTab]);

  return (
    <SkillsSection ref={tabs}>
      <Tabs>
        <BehindTab id="aboutMe">
          <BehindTabHeaderLayout
            onClick={() => {
              setOverlape({ BehindTab: 1 });
              setActiveTab("about-me");
            }}
            overlap={overlape.BehindTab}
          >
            <TabName>About Me</TabName>
            <TabClosing>
              <IoClose className="Icon" size={20} />
            </TabClosing>
          </BehindTabHeaderLayout>
        </BehindTab>
        <FrontTab id="skills">
          <FrontTabHeaderLayout
            onClick={() => {
              setOverlape({ frontTab: 1 });
              setActiveTab("skills");
            }}
            overlap={overlape.frontTab}
          >
            <TabName>Skills</TabName>
            <TabClosing>
              <IoClose className="Icon" size={20} />
            </TabClosing>
          </FrontTabHeaderLayout>
        </FrontTab>
        <ContactTab id="contactMe">
          <ContactTabHeaderLayout
            onClick={() => {
              setOverlape({ contactTab: 1 });
              setActiveTab("contact-me");
            }}
            overlap={overlape.contactTab}
          >
            <TabName>Contact Me</TabName>
            <TabClosing>
              <IoClose className="Icon" size={20} />
            </TabClosing>
          </ContactTabHeaderLayout>
        </ContactTab>
      </Tabs>

      {(function () {
        switch (true) {
          case overlape.frontTab === 1:
            return <SkillsTab />;
          case overlape.BehindTab === 1:
            return <AboutMeTab setOverlape={setOverlape} likes={likes} />;
          case overlape.contactTab === 1:
            return <ContactFormTab />;
        }
      })()}
    </SkillsSection>
  );
}

export default DetailsContainer;
