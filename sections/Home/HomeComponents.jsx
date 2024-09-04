import React, { useEffect, useState } from "react";

import IntroSection from "./Introduction/IntroSection";
import { StyledContent, TransparentLayout, WindowBar } from "./HomeComponents.styled";
import ProjectsSection from "@/sections/Home/Projects/ProjectsSection";
import { ExternalIntroDiv } from "./Introduction/IntroSection.styled";
import DetailsContainer from "./details/DetailsContainer/DetailsContainer";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import ToBeContinued from "../Layout/ToBeContinued/ToBeContinued";

const HomeComponents = ({ projects, likes }) => {
  useEffect(() => {}, [projects]);

  return (
    // <>
    <StyledContent>
      <TransparentLayout>
        <IntroSection />
        <DetailsContainer likes={likes} />
        <ProjectsSection projects={projects} />
      </TransparentLayout>
      <ToBeContinued />
    </StyledContent>
    // </>
  );
};

export default HomeComponents;
