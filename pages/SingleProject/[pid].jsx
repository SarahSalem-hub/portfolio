import {
  StyledContent,
  TransparentLayout,
} from "@/components/Content/Content.styled";
import { ExternalIntroDiv } from "@/components/Content/Introduction/IntroSection.styled";
import { Description, Details, Name, ProjDetails, ProjDiv, ProjPic, ProjSkillsDiv, ProjectContainer, SingleSkill } from "@/components/Content/Projects/SingleProject.styled";
import { db, fetchProjects } from "@/utils/firebase";
import { Divider } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

const SingleProject = ({project}) => {
  console.log("project",project);
  return (
    <StyledContent>
      {/* <div className="scroll"> */}
        <TransparentLayout>
          <ProjectContainer>
            <ProjDiv>
              <ProjDetails>
                <Name>{project.name}</Name>
                <Divider variant="middle"  sx={{ borderBottomWidth: 2, marginLeft: 0 }} />
                <Details>2023</Details>
                <Description>{project.description}</Description>
                <ProjSkillsDiv>
                  {
                    project && project.skills?.map((skill)=>{
                      return <SingleSkill>{skill}</SingleSkill>
                    })
                  }
                </ProjSkillsDiv>
              </ProjDetails>
              <ProjPic>
              <img src={project.image} alt="" />
              </ProjPic>
            </ProjDiv>
            
          </ProjectContainer>

          {/* <ExternalIntroDiv>
          <div>
            {project.name}
            
            <img src={project.image} alt="" /> */}
            {/* use Image instead of img */}
          {/* </div>
          </ExternalIntroDiv> */}
          
        </TransparentLayout>
      {/* </div> */}
    </StyledContent>
  );
};

export default SingleProject;

export async function getStaticPaths() {
  const projects = await fetchProjects(); // getting data from firbase.js so we can get id out of it
  
  const paths = projects.map((project) => ({
    params: {
      pid: project.id
    }
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
  console.log("SingleProData",SingleProData);
  return {
      props: {
          project: SingleProData,
      },
  };
}
