import React, { useEffect, useState } from "react";

import IntroSection from "./Introduction/IntroSection";
import { StyledContent, TransparentLayout, WindowBar } from "./Content.styled";
import ProjectsSection from "./Projects/ProjectsSection";
import { ExternalIntroDiv } from "./Introduction/IntroSection.styled";
import Skills from "../../sections/Skills/Skills";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import ToBeContinued from "./ToBeContinued/ToBeContinued";

const Content = ({ projects,likes }) => {

  useEffect(() => {
   
  }, [projects])
  
  return (
    // <>
    <StyledContent>
      <TransparentLayout>
        <IntroSection />
        <Skills likes= {likes}/>
        <ProjectsSection  projects={projects} />
      </TransparentLayout>
        <ToBeContinued />
    </StyledContent>
    // </>
  );
};

export default Content;
