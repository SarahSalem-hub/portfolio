import { Fredoka } from "@/components/fonts";
import styled from "@emotion/styled";
import Image from "next/image";

export const SkillsSection = styled.div`
  width: 100%;
  /* height: 700px; */
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px 0 100px 0;
  /* position: relative; */
  filter: drop-shadow(0px 0px 26px rgb(0 0 0 / 0.4));
`;

export const SkillsDiv = styled.div`
  padding: 30px 0 87px 0;
  width: 80%;

  border: 5px solid #3a4156;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 0 25px 25px 25px;
  position: relative;
  background-color: #f7f0e6;
  opacity: 1;
  background: radial-gradient(
      circle,
      transparent 20%,
      #f7f0e6 20%,
      #f7f0e6 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        #f7f0e6 20%,
        #f7f0e6 80%,
        transparent 80%,
        transparent
      )
      25px 25px,
    linear-gradient(#f6b233 2px, transparent 2px) 0 -1px,
    linear-gradient(90deg, #f6b233 2px, #f7f0e6 2px) -1px 0;
  background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;

  @media screen and (max-width: 450px) {
    border-radius: 0 0 25px 25px;
}
`;
export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: antiquewhite; */
`;

export const SkillsHeader = styled.div`
  font-size: calc(12px + 1vw);
  color: #383f54;
  margin-left: ${(props) => (props.margin ? "0px" : "10px")};
  display: flex;
  align-items: center;
  font-family: ${Fredoka.style.fontFamily};

`;
export const BoxDiv = styled.div`
  /* height: 180px;
  width: 230px; */
  /* height: 142px; 
   width: 177px; */
  width: 11vmax;
  min-width: 140px;

  height: 9vmax;
  min-height: 115px;

  /* background-color: red; */
  position: relative;

  &:hover {
    #item {
      @keyframes swing {
        20% {
          transform: rotate3d(0, 0, 1, 15deg);
        }
        40% {
          transform: rotate3d(0, 0, 1, -10deg);
        }
        60% {
          transform: rotate3d(0, 0, 1, 5deg);
        }
        80% {
          transform: rotate3d(0, 0, 1, -5deg);
        }
        100% {
          transform: rotate3d(0, 0, 1, 0deg);
        }
      }

      animation: swing 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      animation-iteration-count: infinite;
    }
  }
`;
export const BoxLowerDiv = styled.div`
  background-color: #c6988c;
  border: 3px solid black;
  border-radius: 20px;
  width: 80%;
  height: 100%;
  right: 26px;
  position: absolute;
  z-index: 0;
  box-shadow: 13px 10px 0 #252830;
  /* filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4)); */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxUpperDiv = styled.div`
  background-color: #edd3be;
  border-radius: 20px;
  border: 2px solid black;
  width: 90%;
  height: 90%;
  z-index: 2;
  position: absolute;
  /* right: 15px; */
  /* left:30px;*/
  /* bottom: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxHole = styled.img`
  width: 40px;
  position: absolute;
  top: 15px;
  /* left: 70px; */
  border: 2px solid black;
  border-radius: 50%;
`;

export const BoxGlass = styled.div`
  z-index: 2;
  position: absolute;
  /* border: 2px solid #000000a1; */
  border-radius: 20px 0 0 20px;
  border-right: none;
  width: 100%;
  height: 104%;
  /* right: 35px; */
  /* left: -22px; */
  /*bottom: 10px; */
`;
export const GlassReflection = styled.img`
  position: absolute;
  /* width: 40px; */
  /* width: calc(3vw,2vw); */
  width: 2vw;
  min-width: 30px;
  opacity: 0.5;
  top: 15px;
  left: 9px;
  z-index: 20;
`;
export const GlassReflectionRight = styled.img`
  position: absolute;
  width: 29px;
  opacity: 0.7;
  bottom: 13px;
  right: 10px;
  z-index: 10;
  transform: rotate(173deg);
`;
export const GlassEllipse = styled.img`
  position: absolute;
  width: 20px;
  opacity: 0.5;
  /* top: 50px;
  left: 24px; */
  top: 38%;
  left: 20%;
  z-index: 10;
`;
export const GlassEllipseRight = styled.img`
  position: absolute;
  width: 20px;
  opacity: 0.7;
  bottom: 20px;
  right: 34px;
  z-index: 10;
  transform: rotate(179deg);
`;

export const GlassRightSide = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  right: 4px;
  top: -1px;
  border-right: 3px solid rgb(255 255 255 / 43%);
  border-radius: 20px;
`;

export const BoxItem = styled.img`
  width: 80px;
  height: 80px;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));

`;

// export const

export const Tabs = styled.div`
  height: 60px;
  width: 80%;
  display: flex;
  flex-direction: row;
  /* justify-content: start;
  align-items: start; */
  /* @media only screen and (max-width: 600px){
    width: 80%;
    font-size: 10px;
   
    font-size: 13px; 
     width: 80px;
   *{
    font-size: 10px;
    width: 100px;
   }
  
  svg {
    width: 21px;
  
  }
} */

 
`;

export const FrontTab = styled.div`
  position: relative;
  width: 150px;
  /* min-width: 15%; */
  height: 100%;
  border: 5px solid #3a4156;
  border-radius: 25px 25px 0 0;
  border-bottom: none;

  @media screen and (max-width: 1200px) {
    
      width: 100px;
     div{ 
      font-size: 17px;
     }
    
    svg {
      width: 21px;
    }
  }
  @media screen and (max-width: 600px) {
    
    width: 110px;
   div:first-child{ 
    font-size: 15px;
   }
  
  svg {
    width: 18px;
  }
}
`;
export const FrontTabHeaderLayout = styled.div`
  position: absolute;
  z-index: ${(props) => props.overlap};
  left: 0;
  top: 0px;
  width: 100%;
  height: 113%;
  border-radius: 20px 20px 0 0;
   display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  background: radial-gradient(
      circle,
      transparent 20%,
      #f7f0e6 20%,
      #f7f0e6 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        #f7f0e6 20%,
        #f7f0e6 80%,
        transparent 80%,
        transparent
      )
      25px 25px,
    linear-gradient(#f6b233 2px, transparent 2px) 0 -1px,
    linear-gradient(90deg, #f6b233 2px, #f7f0e6 2px) -1px 0;
  background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const BehindTabHeaderLayout = styled.div`
  position: absolute;
  z-index: ${(props) => props.overlap};
  left: 0;
  top: 0px;
  width: 100%;
  height: 110%;
  /* background-color:  #ffbe79; */
  /* background-color: #efa6a9; */
  background-color: #ef787d;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;

  &:hover {
    cursor: pointer;
  }

  & div:nth-of-type() {
    font-size: 18px;
  }
`;

export const TabClosing = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: red; */
`;

export const BehindTab = styled.div`
  position: relative;
  /* width: 100%; */
  /* display: inline-block; */
  width: 160px;
  /* min-width: fit-content; */
  /* min-width: 20%; */
  height: 100%;
  border: 5px solid #3a4156;
  border-radius: 25px 25px 0 0;
  border-bottom: none;

  @media screen and (max-width: 1200px) {
    
    width: 130px;
   div:first-of-type{ 
    font-size: 15px;
   }
  
  svg {
    width: 21px;
  }
}
@media screen and (max-width: 600px) {
    
    width: 110px;
   div:first-child{ 
    font-size: 12px;
   }
  
  svg {
    width: 18px;
  }
}
`;
export const FrontTabLayout = styled.div`
  width: 95%;
  /* height: 90%; */
  border: 5px solid #3a4156;
  background-color: #fde3c6;
  padding: 100px 30px;
  display: grid;
  grid-gap: 43px 50px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 173px);

  @media screen and (max-width: 600px){
    padding: 50px 10px;
    height: 350px;
    overflow-y: scroll;
  }
`;

export const TitleDiv = styled.div`
  width: 95%;
  padding: 0 0 20px 0;
  display: flex;
  justify-content: start;
`;


//// contact tab
export const ContactTab = styled.div`
  position: relative;
  width: 160px;
  height: 100%;
  border: 5px solid #3a4156;
  border-radius: 25px 25px 0 0;
  border-bottom: none;
  cursor: pointer;
  
  @media screen and (max-width: 1200px) {
    
    width: 130px;
   div:first-child{ 
    font-size: 15px;
   }
  
  svg {
    width: 21px;
  }
}

@media screen and (max-width: 600px) {
    
    width: 110px;
   div:first-child{ 
    font-size: 12px;
   }
  
  svg {
    width: 18px;
  }
}
`
export const ContactTabHeaderLayout = styled.div`
  position: absolute;
  z-index: ${(props) => props.overlap};
  width: 100%; 
  /* width: fit-content; */
  /* border: 5px solid #3a4156; */
  border-bottom: none;
  height: 110%;
  border-radius: 21px 21px 0 0;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
`