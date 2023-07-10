import { Fredoka } from "@/components/fonts";
import styled from "@emotion/styled";

export const ProjectContainer = styled.div`
    width: 100%;
    /* height: 66vh; */
  display: flex;
  justify-content: center;
  padding-top: 152px;
  margin-bottom: 100px;
  
  /* background-color: red; */
  /* @media only screen and (min-width: 1024px) {
    height: 100vh;  
  } */
`
export const ProjDiv = styled.div`
    width: 80%;
    height: 90%;
    /* background-color: #6565be; */
    display: flex;
    justify-content: center;
    margin: 10px;
    gap: 50px;

    @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const ProjDetails = styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    /* background-color: #9fd0d0; */
    display: flex;
    flex: 2;
    justify-content: start;
    flex-direction: column;

`
export const ProjPic = styled.div`
    width: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    /* background-color: #77f25f; */

`
export const SingleProPic = styled.img`
    width: 100%;
        /* max-width: 100%; */
        border-radius: 25px;
        filter: drop-shadow(12px 10px 4px #b6b5b5);
`
export const Name = styled.h1`
    font-size: 30px;
    color: black;
    font-family: ${Fredoka.style.fontFamily};
  /* color: var(--primaryGrey) */
    
`
export const Details = styled.div`
    width: 100%;
    padding: 0px 20px 20px 5px;
    display: flex;
    justify-content: space-between;
`
export const Description = styled.div`
    width: 100%;
    padding: 4px;
    word-wrap: break-word;
    font-size: 20px;
    font-weight: 300;
`
export const ProjSkillsDiv = styled.div`
    width: 90%;
    margin-top: 10px;
    /* word-wrap: break-word; */
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* background-color: #9e733a; */
    
`
export const SingleSkill = styled.div`
    
    background-color:  #3a4156;
    border-radius: 7px;
    color: white;
    width: fit-content;
    
    padding: 5px 0 5px 0;
    padding-inline: 7px;
    filter: drop-shadow(5px 1px 4px #b6b5b5);
`