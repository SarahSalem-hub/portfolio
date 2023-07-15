import styled from "@emotion/styled";
import { Fredoka } from "@/components/fonts";

export const BehindTabDiv = styled.div`
  padding: 30px 0 87px 0;
  width: 80%;
  z-index: 0;
  /* height: 100%; */
  border: 5px solid #3a4156;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 0 25px 25px 25px;
  /* position: relative; */
  /* background-color: #ffbe79; */
  background-color: #ef787d;
  opacity: 1;
  /* filter: drop-shadow(0px 0px 26px rgb(0 0 0 / 0.4)); */
  @media screen and (max-width: 450px) {
    border-radius: 0 0 25px 25px;
}
`;

export const InstagramAccountDiv = styled.div`
/* position: ; */
  width: 95%;
  height: 100%;
  background-color: #f1e6cd;
 
  border: 5px solid #3a4156;
  /* padding-inline: 300px; */
  border-radius: 25px;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
 
  

  @media screen and (min-width: 1200px) {
    justify-content: center;
    align-items: center;
    gap: 20px;
    }
`;
export const AccountHeader = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: aliceblue; */
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding-inline: 14px;

  @media screen and (min-width: 1200px) {
    justify-content: center;
    gap: 388px;
    }
`
export const AccountName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-family: ${Fredoka.style.fontFamily};
  color: #3a4156;

`
export const AccountIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  /* background-color: red; */
  padding-inline: 7px;
  
  svg {
    color: #3a4156;
    stroke-width: 1;

    &:nth-of-type(1){
      width: 30px;
    }
  }

`

///
export const ProfileInfo = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: start;
  gap: 30px;
  padding-inline: 20px;
@media screen and (min-width: 1200px) {
       /* gap: 180px; */
       /* justify-content: center; */
    }

    @media screen and (max-width: 500px) {
       flex-direction: column;
       justify-content: center;
       align-items: center;
       height: 100%;
       gap: 15px;
       margin-bottom: 18px;
    }
  
`
export const ProfilePicDiv = styled.div`
  width: 100px;
  min-width: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    border-radius: 50%;
    border: 2px solid #8080803b;
    padding: 3px;
    /* border-collapse: separate;
    border-spacing: 10px; */
    width: 100%;
  }
`
export const ProfileStatistics = styled.div`
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 60px;
 
  @media screen and (max-width: 1200px) {
       gap: 10px;
      font-size: 14px;
    }
 
`
export const SingleStatistic = styled.div`
   height: 100%;
   width: 100%;
  font-family: ${Fredoka.style.fontFamily};
  font-size: calc(12px + 0.3vw);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  color: #3a4156;
  text-align: center;
  /* background-color: #8b8baf; */

  & div{
    display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
    width: 100%;
    max-width: 100px;
    min-width: 50px;
    height: 50px;
    /* background-color: firebrick; */
  }
  & div:last-child{
    /* display: flex; */
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
    /* width: 100%;
    max-width: 100px;
    min-width: 50px;
    height: 50px; */
    /* background-color: #af7f7f; */
  }
  
`

export const BioDiv = styled.div`
  width: 100%;
  /* background-color: #d1953c; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-inline: 15px;
  padding: 20px;

  /* @media screen and (min-width: 1200px) {
       align-items: center;
       justify-content: start;
       text-align: start;
    } */
  /* border : 2px solid black; */
 
`
export const SingleBioInfo = styled.p`
/* background-color: aqua; */
width: 100%;
  color: #3a4156;
  /* font-size: 16px; */
  font-size:calc(13px + 0.3vw);
  font-family: ${Fredoka.style.fontFamily};
  
  @media screen and (max-width: 500px) {
    text-align: center;
    }
`

export const ButtonsDiv = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: aliceblue; */
  display: flex;
  justify-content: center;
  gap: 9px;
  padding-inline: 20px;
  align-items: center;
`
export const ProfileButton = styled.button`
  width: 94%;
  height: 60%;
  /* border: 2px solid #808080; */
  border: 2px solid #3a4156;
  /* background-color: red; */
  border-radius: 10px;
  font-size: calc(10px + 0.5vw);
  font-family: ${Fredoka.style.fontFamily};
  color: ${props => props.buttonColor ? "antiquewhite" : "#3a4156" };
  letter-spacing: 2px;
  background-color: ${props => props.buttonColor ? "#3a4156" : "transparent" };
  padding: 7px;
`

export const LinksPicsDiv = styled.div`
  width: 100%;
  /* height: 80px; */
  display: flex;
  /* background-color: aqua; */
  padding: 10px 10px 10px 25px;
  gap: 20px;
`
export const LinkPic = styled.div`
  width: 65px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    border-radius: 50%;
    border: 2px solid #8080803b;
    padding: 3px;
    /* border-collapse: separate;
    border-spacing: 10px; */
    width: 100%;
  }

  @media screen and (max-width: 600px) {
   width: 50px;
    }

  @keyframes pulse {
  0% {
    transform: scale3d(1, 1, 1); }
  50% {
    transform: scale3d(1.1, 1.1, 1.1); }
  100% {
    transform: scale3d(1, 1, 1); } }
  :hover{
    animation: pulse 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`
export const EmojiSize = styled.div`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
  font-size: ${props => props.size};
  /* background-color: red; */
`