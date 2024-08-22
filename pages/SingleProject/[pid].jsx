
import {
  Description,
  Details,
  Name,
  ProjDetails,
  ProjDiv,
  ProjPic,
  ProjSkillsDiv,
  ProjectContainer,
  SingleProPic,
  SingleSkill,
} from "@/sections/Home/Projects/SingleProject.styled";
import { StyledContent, TransparentLayout } from "@/sections/Home/HomeComponents.styled";
import { db, fetchProjects } from "@/utils/firebase";
import { Divider } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import React from "react";

const SingleProject = ({ project }) => {
  return (
    <StyledContent setHeight={true}>
      <TransparentLayout>
        <ProjectContainer>
          <ProjDiv>
            <ProjDetails>
              <Name>{project.name}</Name>
              <Divider
                variant="middle"
                sx={{ borderBottomWidth: 2, marginLeft: 0 }}
              />
              <Details>2023</Details>
              <Description>{project.description}</Description>
              <ProjSkillsDiv>
                {project &&
                  project.skills?.map((skill) => {
                    return <SingleSkill key={skill}>{skill}</SingleSkill>;
                  })}
              </ProjSkillsDiv>
            </ProjDetails>
            <ProjPic>
              <Link href={project.link ? project.link : "#"} target="_blank">
                <SingleProPic src={project.image} alt="Project pic" />
              </Link>
            </ProjPic>
          </ProjDiv>
        </ProjectContainer>
      </TransparentLayout>
    </StyledContent>
  );
};

export default SingleProject;

export async function getStaticPaths() {
  const projects = await fetchProjects(); // getting data from firbase.js so we can get id out of it

  const paths = projects.map((project) => ({
    params: {
      pid: project.id,
    },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const docRef = doc(db, "projects", params.pid);
  const data = await getDoc(docRef);
  const SingleProData = data.data();

  return {
    props: {
      project: SingleProData,
    },
  };
}
