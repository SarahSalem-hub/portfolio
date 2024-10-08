import styled from "@emotion/styled";
import Image from "next/image";


export const Image_Folder = styled.div`
  /* padding-bottom: 8px; */
 
  /* background-color: #c08787; */
  svg{
    width: 70px;
  }
  @media only screen and (max-width: 700px) {
    svg{
    width: 50px;
  }
  }
`;

export const ShortcutFolder = styled(Image_Folder)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;

  img{
    width: 17px;
    height: 17px;
    position: absolute;
    bottom: 12px;
    left: 0px;
  }
  @media only screen and (max-width: 700px) {
    img {
      bottom:20px
    }
  }

`
export const Div_Folder = styled.div`
  width: 120px;
  /* padding-bottom: 5px; */
  /* height: 100px; */
  /* background-color: #ff000042;  */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: 5px;
 
  &:hover {
    /* scale: 1.3; */
    background-color: #ff000042; 
    border-radius: 15px;
  
  }
    @media only screen and (max-width: 700px) {
    width: 80px;
    height: min-content;
  }
`;

// export const Image_Folder = styled.div`
//   padding-bottom: 8px;
// `;

export const P_FolderName = styled.p`
  font-size: 14px;
  color: #595378;
  text-align: center;
  letter-spacing: 0.5px;
  font-weight: 700;
  /* text-shadow: -3px 4px 17px rgba(52,46,46,0.6); */
  @media only screen and (max-width: 700px) {
    font-size: 12px;
    /* letter-spacing: normal; */
    white-space: nowrap;
  }

`;
