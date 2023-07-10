import React from "react";
import {
  BoxDiv,
  BoxGlass,
  BoxItem,
  BoxLowerDiv,
  BoxUpperDiv,
  FrontTabLayout,
  GlassEllipse,
  GlassEllipseRight,
  GlassReflection,
  GlassReflectionRight,
  GlassRightSide,
  ItemDiv,
  SkillsDiv,
  SkillsHeader,
  TitleDiv,
} from "../../../sections/Skills/Skills.styled";
import { Title } from "../Projects/ProjSection.styled";
import { SkillsInfo } from "../../../sections/Skills/SkillsInfo";

function SkillsTab() {
  return (
    <SkillsDiv>
      <TitleDiv>
        <SkillsHeader>what I&apos;m using to code with?</SkillsHeader>
      </TitleDiv>
      <FrontTabLayout>
        {SkillsInfo.map((info) => {
          return (
            <ItemDiv key={info.name}>
              {/* <TitleDiv> */}
              <Title font="20px" margin="false">
                {info.name}
              </Title>
              {/* </TitleDiv> */}
              <BoxDiv key={info.id}>
                <BoxLowerDiv>
                  {/* <BoxHole src="/assets/images/BoxHole.svg" /> */}

                  <BoxUpperDiv>
                    <GlassRightSide />
                    <BoxItem id="item" src={info.logo} alt="polygon" />

                    <BoxGlass>
                      <GlassReflection
                        src="/assets/images/triangle.svg"
                        alt="polygon"
                      />
                      <GlassReflectionRight
                        src="/assets/images/triangle.svg"
                        alt="polygon"
                      />
                      <GlassEllipse
                        src="/assets/images/Ellipse.svg"
                        alt="ellipse"
                      />
                      <GlassEllipseRight
                        src="/assets/images/Ellipse.svg"
                        alt="ellipse"
                      />
                    </BoxGlass>
                  </BoxUpperDiv>
                </BoxLowerDiv>
              </BoxDiv>
            </ItemDiv>
          );
        })}
      </FrontTabLayout>
    </SkillsDiv>
  );
}

export default SkillsTab;
