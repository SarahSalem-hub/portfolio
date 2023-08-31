import { Fredoka, Syncopatee } from "@/components/fonts";
import styled from "@emotion/styled";

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* background-color: red; */
  @media only screen and (max-width: 950px) {
    margin-top: 130px;
    height: 100%;
    padding-bottom: 50px;
  }
`;
export const ProjDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
export const ProjDetails = styled.div`
  width: 100%;
  max-width: 500px;
  /* background-color: #9fd0d0; */
  display: flex;
  flex: 2;
  justify-content: start;
  flex-direction: column;

  text-shadow: 4px 5px 6px rgb(0 0 0 / 20%);
`;
export const ProjPic = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  /* background-color: #77f25f; */

  
`;
export const SingleProPic = styled.img`
  width: 100%;
  border-radius: 25px;
  filter: drop-shadow(12px 10px 4px #b6b5b5);
  &:hover{
    
    cursor: pointer;
    
  }
`;
export const Name = styled.h1`
  font-size: 30px;
  color: #c6324dfc;
  font-family: ${Syncopatee.style.fontFamily};
  font-weight: 700;
`;
export const Details = styled.div`
  width: 100%;
  padding: 0px 20px 20px 5px;
  display: flex;
  justify-content: space-between;
`;
export const Description = styled.div`
  width: 100%;
  padding: 4px;
  word-wrap: break-word;
  font-size: calc(15px + 0.3vw);
  font-family: "Tomorrow", sans-serif;
  color: #3a4156d1;
  line-height: 1.75;
`;
export const ProjSkillsDiv = styled.div`
  width: 90%;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* background-color: #9e733a; */
`;
export const SingleSkill = styled.div`
  background-color: #3a4156;
  border-radius: 7px;
  color: white;
  width: fit-content;
  font-size: calc(12px + 0.2vw);
  padding: 5px 0 5px 0;
  padding-inline: 7px;
  filter: drop-shadow(5px 1px 4px #b6b5b5);
`;

export const TabName = styled.div`
  color: #383f54;
  margin-left: ${(props) => (props.margin ? "0px" : "10px")};
  display: flex;
  align-items: center;
  font-family: ${Fredoka.style.fontFamily};
  line-height: normal;
`;
