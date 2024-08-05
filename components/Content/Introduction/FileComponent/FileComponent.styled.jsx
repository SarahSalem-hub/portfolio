import styled from "@emotion/styled";

export const FileName = styled.div`
  /* background-color: aqua; */
  padding: 5px;
  width: inherit;
  color: black;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const FileImage = styled.div`
  /* background-color: aquamarine; */
  position: relative;
  /* height: 100%;
    width: 100%; */
  height: 90px;
  width: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;
export const ImageLayout = styled.div`
  /* background-color: rebeccapurple; */
  width: 70px;
  height: 90px;
  position: relative;
  /* border-bottom: 3px solid black; */
  padding-inline:1px ;
  /* display: flex;
    justify-content: center;
    align-items: center; */

   img:nth-child(1) {
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* background-color: #1aff00; */
  }

  & img:nth-child(2) {
    z-index: 3;
    width: 18px;
    height: 18px;
    right: 0.6px;
    top: -0.3px;
    position: absolute;
    -webkit-filter: drop-shadow(-0.4px 1px 1px #878787);
    filter: drop-shadow(-0.4px 1px 1px #878787);
    transform: rotate(1deg);
    /* transform: rotate(1deg); */
  }

  & img:nth-child(3) {
    z-index: 2;
    /* width: 50px;
        height: 30px; */
    clip-path: polygon(0 0,74% 0,101% 20%,100% 20%,100% 100%,0 100%);
    object-fit: cover;
    
    object-position: top;
    /* padding-inline: 1px;  */
    border: 0.2px solid #7f7f7f82;
  }
`;

export const FileTypeIcon = styled.div`
  width: 80%;
  height: 20px;
  /* background-color: aqua; */
  position: absolute;
  bottom: 2px;
  right: 3.5px;
  z-index: 4;
 
  /* padding-left: 2px ; */

  img:nth-child(1){
    object-fit: contain;
    /* background-color: #42b8b8; */
    object-position: bottom right;
  }
/* From https://css.glass */
/* background: rgba(99, 142, 152, 0.73);
border-radius: 3px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(99, 142, 152, 0.3); */
  /* padding: 3px; */
`

export const FileContainer = styled.div`
  width: 100%;
  height: fit-content;
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    ${FileImage} {
      background-color: #e3b64c46;
      outline: 1px solid #a2a1a1;
      border-radius: 10px;
    }
    ${FileName} {
      white-space: pre-wrap;
      height: max-content;
      width: 90px;
    }
  }
`;
// export const FileImage = styled.div`

//     position: relative;
//     /* height: 100%;
//     width: 100%; */
//     height: 90px;
//     width: 99px;

// `
// export const FileName = styled.div`
// background-color: aqua;
//     padding: 5px;
//     width: inherit;
//     color: black;
//     font-size: 14px;
//     text-align: center;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;

// `
