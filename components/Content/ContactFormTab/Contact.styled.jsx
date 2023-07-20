import { Fredoka } from "@/components/fonts";
import styled from "@emotion/styled";


export const ContactDiv = styled.div`
  padding: 25px 0 25px 0;
  z-index: 0;
  width: 80%;
  /* height: 200px; */
  border: 5px solid #3a4156;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 0 25px 25px 25px;
  background-color: antiquewhite;

  @media screen and (max-width: 600px) {
    border-radius: 0 0 25px 25px;
}
`;
export const ChatBox = styled.div`
  width: 95%;
  padding: 20px;
  height: 100%;
  /* background-color: #00000042; */
  /* background-color: #2d405beb; */
  /* background-color: #3d8f8c; */
  background-color: #81698f8f;
  border: 4px solid #3a4156;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export const ReceiverBox = styled.div`
  padding: 10px;
  width: 100%;
  //height: 250px; // remove this later

  /* background-color: #7fd064; */
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  /* border: 5px solid #3a4156; */

  @media screen and (max-width: 1200px) {
    position: relative;
    font-size: 10px;
  }

`;
export const SenderBox = styled.div`
  padding: 10px;
  width: 100%;
  height: 200px; // remove this later */
  /* background-color: #1a6fb9; */
  display: flex;
  justify-content: space-between;
  gap: 20px;
  /* border: 5px solid #3a4156; */
  @media screen and (max-width: 1200px) {
    position: relative;
  }
`;

export const ChatBoxDiv = styled.div`
  flex: 4;
  height: 95%;
  width: 85%;
  padding: 20px;
  /* background-color: #acacd5; */
  /* background-color: #c76f6f; */
  background-color: #f6d0a1;
  display: flex;
  flex-direction: column;
  border: 4px solid #3a4156;
  border-radius: 25px;
  gap: 5px;
  box-shadow: 13px 10px 0 #252830;
  padding-bottom: 30px;
  font-size: 20px ;
  @media screen and (max-width: 900px){
    height: 250px;
    overflow-y:scroll;
    font-size: 13px;
  }
`;
export const ChatBoxPicDiv = styled.div`
  flex: 1;
  height: 95%;
  width: 100%;
  max-width: 150px;
  gap: 20px;
  z-index: 1;
  @media screen and (max-width: 600px) {
    :last-of-type{
      position: absolute;
    width: 10%;
      
    right: 20px;
    top: 20px;
    border-radius: 50%;
    }

    :first-of-type{
      position: absolute;
    width: 10%;
    left: 20px;
    top: 20px;
    border-radius: 50%;
    }
  }
  /* border: 5px solid #3a4156; */
`;
export const ChatBoxPic = styled.img`
  /* object-fit: cover; */
  border-radius: 50%;
  object-fit: contain;
  
`;

export const SingleMsgDiv = styled.div`
  display: flex;
  margin-block: 4px;
  
`;

export const DialogName = styled.div`
  color: ${(props) => props.color};
  font-size: inherit;
  margin-right: 10px;
 
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }

  }
  animation-name: show;
  animation-duration: 1.5s;
`;

export const ReceiverMsg = styled.div`
  color: #3f3e3e;
  font-size: inherit;
   white-space: pre-line;
   line-height: normal;
   /* word-break: break-all;  */
   /* line-height: 25px; */
   /* -webkit-text-stroke: 1px #140909; */



   @keyframes show {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 1;
    }

  }
  animation-name: show;
  animation-duration: 1.5s;
`;

export const SendMsgBox = styled.div`
   flex: 4;
  height: 95%;
  width: 85%;
  position: relative;
  /* background-color: red; */
  /* display: flex;
  align-items: center;
  gap: 20px; */
`

export const SendMsg = styled.textarea`
  flex: 4;
  height: 95%;
  width: 100%;
  padding: 20px;
  /* background-color: #acacd5; */
  /* background-color: #c76f6f; */
  background-color: #f6a1ada3;
  border: 5px solid #3a4156;
  border-radius: 25px;
  padding-top: 10px;
  padding-left: 10px;
  box-shadow: 13px 10px 0 #252830;
  resize: none;

  ::placeholder{
    color: #2c353f;
    font-family: ${Fredoka.style.fontFamily};
  }

  @media screen and (max-width: 600px){
    
    text-indent: 14%;

  }
  :focus {
      outline: none !important;
      
    }
`;

export const SendButton = styled.button`
    box-shadow: 1px 4px 12px -2px rgb(78 44 53);
    position: absolute;
    bottom: 20px;
    color: #f0b5c2;
    right: 10px;
    background-color: #555c72f2;
    flex:1;
    width: 90px;
    height: 38px;
    border-radius: 16px;
    opacity: ${props => props.readOnly ? "1" : "0"};

   
`