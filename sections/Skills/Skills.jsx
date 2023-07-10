import React, { useContext, useState } from "react";
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
} from "./Skills.styled";
import { IoClose } from "react-icons/io5";
import { Title } from "../../components/Content/Projects/ProjSection.styled";
import ContactFormTab from "../../components/Content/ContactFormTab/ContactFormTab";
import SkillsTab from "../../components/Content/SkillsTab/SkillsTab";
import AboutMeTab from "../../components/Content/AboutMeTab/AboutMeTab";
import { UserContext } from "@/pages/_app";

function Skills() {
  const [overlape, setOverlape] = useState({
    frontTab: 1,
    BehindTab: 0,
    contactTab: 0,
  });
  const {tabs} = useContext(UserContext)


  console.log("overlap", overlape);
  return (
    <SkillsSection ref={tabs}>
      <Tabs>
        <FrontTab>
          <FrontTabHeaderLayout
            onClick={() =>
              setOverlape({ frontTab: 1, BehindTab: 0, contactTab: 0 })
            }
            overlap={overlape.frontTab}
          >
            <Title font="25px">Skills</Title>
            <TabClosing>
              <IoClose className="Icon" size={33} />
            </TabClosing>
          </FrontTabHeaderLayout>
        </FrontTab>
        <BehindTab>
          <BehindTabHeaderLayout
            onClick={() =>
              setOverlape({ frontTab: 0, BehindTab: 1, contactTab: 0 })
            }
            overlap={overlape.BehindTab}
          >
            <Title font="20px">About ME</Title>
            <TabClosing>
              <IoClose className="Icon" size={33} />
            </TabClosing>
          </BehindTabHeaderLayout>
        </BehindTab>
        <ContactTab>
          <ContactTabHeaderLayout
            onClick={() =>
              setOverlape({ frontTab: 0, BehindTab: 0, contactTab: 1 })
            }
            overlap={overlape.contactTab}
          >
            <Title font="17px">Contact Me</Title>
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
            return <AboutMeTab setOverlape={setOverlape} />;
          case overlape.contactTab === 1:
            return <ContactFormTab />;
        }
      })()}
    </SkillsSection>
  );
}

export default Skills;
