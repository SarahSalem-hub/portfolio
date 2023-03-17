import React, { useEffect, useRef, useState } from "react";
import {
  DivPro,
  ProDetails,
  ProImg,
  ProjContainer,
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
import { AiFillGithub } from "react-icons/ai"
import { FcOpenedFolder } from "react-icons/fc"
import Link from "next/link";


const Projects = ({setRefValue}) => {
  const [projects, setProjects] = useState();
  const projectsColl = collection(db, "projects");
   const scrollToRef = useRef()

  const fetchProjs = async () => {
    const getProjsDocs = await getDocs(projectsColl);
    const getProjs = getProjsDocs.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setProjects(getProjs);
  };
  useEffect(() => {
    fetchProjs();
    setRefValue(scrollToRef.current)
  }, []);
  
  return (
    <div ref={scrollToRef} className="relative flex flex-col gap-32 justify-center w-full">
      <div className="relative flex justify-center ">
      <ProSectionHeader className={Fredoka.className}> My Projects </ProSectionHeader>
      <FcOpenedFolder className="Icon absolute " size={100} />
      <a href=""></a>
      </div>
      
      <ProjsDiv  >
        {projects?.map((project) => {
          return (
            <ProjContainer key={project.name}>
              {/* <Image src={project.image} width="100" height="100"/> */}
              <ProWindowBar>
                    <div className="flex flex-row">
                      <FaCode className="Icon" size={40} />
                      <Title className={Fredoka.className}>
                        {project.name}
                      </Title>
                    </div>
                    <div className="flex flex-row">
                      <FiMinus className="Icon" size={40} />
                      <IoClose className="Icon" size={40} />
                    </div>
              </ProWindowBar>
              <Link href="/SingleProject">
              <ProWindow >
                <DivPro>
                    <ProImg src={project.image} alt="project" />
                </DivPro>
                <ProDetails>
                    <Title className={Fredoka.className} style={{fontSize:"18px"}}>
                    {project.description}
                    </Title>
                    <div className="flex flex-row justify-end ">
                      <a href={project.github} target="_blank">
                      <AiFillGithub className="Icon" size={50} />
                      </a>
                     </div>
                </ProDetails>
              </ProWindow>
              </Link>
            </ProjContainer>
          );
        })}
        
      </ProjsDiv>
    </div>
  );
};

export default Projects;
