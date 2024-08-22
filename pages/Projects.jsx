

import { StyledContent, TransparentLayout } from "@/sections/Home/HomeComponents.styled";
import ProjectsSection from "@/sections/Home/Projects/ProjectsSection";
import React from "react";

function Projects() {
  return (
    <StyledContent>
      <TransparentLayout>
        <ProjectsSection />
      </TransparentLayout>
    </StyledContent>
  );
}

export default Projects;
