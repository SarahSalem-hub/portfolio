import React from "react";
import { Div_Folder, Image_Folder, P_FolderName } from "./FolderIcon.styled";
import { FcOpenedFolder } from "react-icons/fc";

const FolderIcon = ({ folder, setOpenedWindow, setFolderiIndex }) => {
  
  return (
    <Div_Folder id={folder.id} onClick={()=> {setOpenedWindow(true),setFolderiIndex(folder.id)  }} >
      <Image_Folder>

      
       <FcOpenedFolder size={90}/>
      </Image_Folder>
      <P_FolderName>{folder.name}</P_FolderName>
    </Div_Folder>
  );
};

export default FolderIcon;
// TO DO : replace the svg code to a png or make it in a 
//separeted comp