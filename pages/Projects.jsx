import {
  StyledContent,
  TransparentLayout,
} from "@/components/Content/Content.styled";
import ProjectsSection from "@/components/Content/Projects/ProjectsSection";
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
