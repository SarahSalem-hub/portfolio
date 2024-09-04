import React from "react";
import {
  Div_Folder,
  Image_Folder,
  P_FolderName,
  ShortcutFolder,
} from "./FolderIcon.styled";
import { FcOpenedFolder } from "react-icons/fc/index.js";

const FolderIcon = ({ folder, setOpenedWindow, setFolderiIndex }) => {
  // console.log("folder cont", folder);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId).firstChild;
    if (section) {
      const yOffset = -150; // Offset to shift from the top
      const yPosition =
        section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });

      setTimeout(() => {
        section.click();
      }, 500); // Adjust the timeout if needed
    } else {
      console.log("Section not found");
    }
  };

  const swipeOrOpenWindowChecker = (folder) => {
    if (folder.swipeToSection) {
      scrollToSection(folder.swipeToSection);
    } else 0;
  };

  return (
    <Div_Folder
      id={folder.id}
      onClick={() => {
        swipeOrOpenWindowChecker(folder);
        setOpenedWindow(folder.swipeToSection ? false : true);
        setFolderiIndex(folder.id);
      }}
    >
      {folder.swipeToSection ? (
        <ShortcutFolder>
          <FcOpenedFolder size={90} />
          <img src="./assets/images/shortcut.png" alt="" />
        </ShortcutFolder>
      ) : (
        <Image_Folder>
          <FcOpenedFolder size={90} />
        </Image_Folder>
      )}

      <P_FolderName>{folder.name}</P_FolderName>
    </Div_Folder>
  );
};

export default FolderIcon;
// TO DO : replace the svg code to a png or make it in a
//separeted comp
