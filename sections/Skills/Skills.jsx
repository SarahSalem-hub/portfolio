import React, { useContext, useEffect, useState } from "react";
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
import { TabName } from "@/components/Content/Projects/SingleProject.styled";

function Skills({likes}) {
  const [overlape, setOverlape] = useState({
    frontTab: 0,
    BehindTab: 1,
    contactTab: 0,
  });
  const {tabs,setActiveTab} = useContext(UserContext)

  useEffect(() => {
    setActiveTab("about-me")
  }, [])
  

 
  return (
    <SkillsSection ref={tabs}>
      <Tabs>
        
        <BehindTab>
          <BehindTabHeaderLayout
            onClick={() =>
              {setOverlape({ frontTab: 0, BehindTab: 1, contactTab: 0 });
              setActiveTab("about-me")}
            }
            overlap={overlape.BehindTab}
          >
            <TabName >About Me</TabName>
            <TabClosing>
              <IoClose className="Icon" size={20} />
            </TabClosing>
          </BehindTabHeaderLayout>
        </BehindTab>
        <FrontTab>
          <FrontTabHeaderLayout
            onClick={() =>
              
            {setOverlape({ frontTab: 1, BehindTab: 0, contactTab: 0 });
            setActiveTab("skills")}
              
            }
            overlap={overlape.frontTab}
          >
            <TabName >Skills</TabName>
            <TabClosing>
              <IoClose className="Icon" size={20} />
            </TabClosing>
          </FrontTabHeaderLayout>
        </FrontTab>
        <ContactTab>
          <ContactTabHeaderLayout
            onClick={() =>
             { setOverlape({ frontTab: 0, BehindTab: 0, contactTab: 1 });
             setActiveTab("contact-me")}
            }
            overlap={overlape.contactTab}
          >
            <TabName >Contact Me</TabName>
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
            return <AboutMeTab  setOverlape={setOverlape} likes={likes} />;
          case overlape.contactTab === 1:
            return <ContactFormTab />;
        }
      })()}
    </SkillsSection>
  );
}

export default Skills;
