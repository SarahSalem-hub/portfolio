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
import { FaCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";
import Link from "next/link";
import SingleProjectComp from "./SingleProject";
import { UserContext } from "@/pages/_app";

const ProjectsSection = ({ projects }) => {
  const [projectsCount, setProjectsCount] = useState(2);
  const scrollToRef = useRef();
  const { projectSection } = useContext(UserContext);

  return (
    <ProjectsSectionDiv ref={projectSection}>
      <FolderIconDiv>
        <ProSectionHeader> My Projects </ProSectionHeader>
        <FcOpenedFolder size={100} />
        <a href=""></a>
      </FolderIconDiv>

      <ProjsDiv ref={scrollToRef}>
        {projects?.length === 0
          ? [...Array(projectsCount)].map((project) => {
              return <SingleProjectComp />;
            })
          : projects?.map((project) => {
              return (
                <SingleProjectComp
                  id={project.id}
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  github={project.github}
                />
              );
            })}
      </ProjsDiv>
    </ProjectsSectionDiv>
  );
};

export default ProjectsSection;
