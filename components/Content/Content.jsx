import styled from "@emotion/styled";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import IntroSection from "./Introduction/IntroSection";
import Projects from "./Projects/ProjectsSection";
import { ProWindowBar, Title } from "./Projects/ProjSection.styled";
import { FaCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { Fredoka } from "../fonts";
import { StyledContent, TransparentLayout, WindowBar } from "./Content.styled";


const Content = ({setRefValue}) => {
 
  return (
    <>
        
    
    <StyledContent>
      
      <div className="scroll">
        {/* <Navbar /> */}
        <TransparentLayout>
          <IntroSection />
          <Projects setRefValue={setRefValue} />
        </TransparentLayout>
      </div>
    </StyledContent>
    </>
  );
  
};

export default Content;
