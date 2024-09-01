import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DivPro,
  FolderIconDiv,
  ImageAndDetails,
  LinksDiv,
  ProDetails,
  ProImg,
  ProjContainer,
  ProjectsSectionDiv,
  ProjImageDiv,
  ProjsDiv,
  ProSectionHeader,
  ProWindow,
  ProWindowBar,
  Title,
} from "./ProjSection.styled";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { Fredoka } from "@/components/fonts";
import { FaCode } from "react-icons/fa/index.js";
import { IoClose } from "react-icons/io5/index.js";
import { FiMinus } from "react-icons/fi/index.js";
import { AiFillGithub } from "react-icons/ai/index.js";
import { FcOpenedFolder } from "react-icons/fc/index.js";
import Link from "next/link";
import SingleProjectComp from "./SingleProject";
import { UserContext } from "@/pages/_app";

const ProjectsSection = ({ projects }) => {
  const [projectsCount, setProjectsCount] = useState(2);
  const scrollToRef = useRef();
  const { projectSection } = useContext(UserContext);

  const sortedProjects = projects?.sort((a, b) => {
    if (a.priority < b.priority) {
      return -1;
    } else if (a.priority > b.priority) {
      return 1;
    } else return 0;
  });

  return (
    <ProjectsSectionDiv ref={projectSection}>
      <FolderIconDiv>
        <ProSectionHeader> My Projects </ProSectionHeader>
        <FcOpenedFolder size={100} />
        {/* <a href=""></a> */}
      </FolderIconDiv>

      <ProjsDiv ref={scrollToRef}>
        {sortedProjects?.length === 0
          ? [...Array(projectsCount)].map((project) => {
              return <SingleProjectComp key={project} />;
            })
          : sortedProjects?.map((project) => {
              return (
                <SingleProjectComp
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  github={project.github}
                  link={project.link}
                  priority={project.priority}
                />
              );
            })}
      </ProjsDiv>
    </ProjectsSectionDiv>
  );
};

export default ProjectsSection;
