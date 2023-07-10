import React, { useEffect, useState } from "react";

import IntroSection from "./Introduction/IntroSection";
import { StyledContent, TransparentLayout, WindowBar } from "./Content.styled";
import ProjectsSection from "./Projects/ProjectsSection";
import { ExternalIntroDiv } from "./Introduction/IntroSection.styled";
import Skills from "../../sections/Skills/Skills";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const Content = ({ projects }) => {
  return (
    // <>
    <StyledContent>
      <TransparentLayout>
        <IntroSection />
        <Skills />
        <ProjectsSection  projects={projects} />
        
      </TransparentLayout>
    </StyledContent>
    // </>
  );
};

export default Content;
