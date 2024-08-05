import React, { useEffect, useRef, useState } from "react";
import {
  CircleDiv,
  ContentSideBar,
  FolderContentDiv,
  FolderSidebar,
  FolderTitle,
  PreviousNextDiv,
  SideBarItem,
  SmallWinBar,
  SmallWinWrapper,
  WindowSideBar,
} from "./window.styled";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FileComponent from "../FileComponent/FileComponent";
import { handleClickOutside, handleEscape } from "./eventHandlers";
import useDraggable from "../../../../hooks/useDraggable";
import { filterFolders } from "./helpers";
import useClickOutside from "@/hooks/useClickOutside";
import { HiFolderOpen } from "react-icons/hi";
import { GrFormFolder, GrFormNext } from "react-icons/gr";

const WindowLayout = ({
  setOpenedWindow,
  foldersContentAndInfo,
  selectedObj,
  windowsArray
}) => {
  const [selectedFolderInNavigation, setSelectedFolderInNavigation] = useState(
    selectedObj.id
  );
  const [openedWinds, setopenedWinds] = useState()
  const divRef = useRef(null);
  const clickOutside = useClickOutside(divRef, setOpenedWindow);

  const { position, onMouseDown } = useDraggable(50, 50, divRef);
  // console.log("windowsArray inside ",windowsArray)
  useEffect(() => {
    
      const opened = foldersContentAndInfo.filter(folder => 
        {
          return windowsArray.some((window)=>{
            console.log(" folder.id === window", folder.id === window)
          return  folder.id === window
          })
        }
        )
        setopenedWinds(opened)
        
    console.log("opened",opened)
    // console.log("windowsArray inside ",windowsArray)
    

  }, [windowsArray,foldersContentAndInfo])
  

  return (
    
    <SmallWinWrapper ref={divRef} onMouseDown={onMouseDown} position={position}>
      <FolderSidebar>
        <SmallWinBar>
          <CircleDiv
            backgroundColor="var(--primaryGrey)"
            onClick={() => setOpenedWindow(false)}
          >
            <div>
              <IoClose color="#FFF8D1" size={12}/>
            </div>
          </CircleDiv>
          <CircleDiv backgroundColor="var(--secondaryRosyPink)"> </CircleDiv>
          <CircleDiv backgroundColor="var(--secondaryPeachOrange)"> </CircleDiv>
        </SmallWinBar>
        <WindowSideBar>
          {foldersContentAndInfo.map((folder) => {
            // console.log(
            //   "if selected folder ",
            //   folder.id === selectedObj.id,
            //   folder.id
            // );
            return (
              <SideBarItem
                key={folder.id}
                selected={
                  folder.id ===
                  filterFolders(
                    foldersContentAndInfo,
                    selectedFolderInNavigation
                  ).id
                    ? true
                    : false
                }
                onClick={() => setSelectedFolderInNavigation(folder.id)}
              >
                {folder.name}
              </SideBarItem>
            );
          })}
        </WindowSideBar>
      </FolderSidebar>
      <FolderContentDiv>
        <FolderTitle>
          <PreviousNextDiv>
            {/* <FaChevronLeft />
            <FaChevronRight /> */}
            {/* <HiFolderOpen size={22} color="#3a4156"/> */}
            <GrFormNext size={22} color="#3a4156"/>
           
          </PreviousNextDiv>
          {
            filterFolders(foldersContentAndInfo, selectedFolderInNavigation)
              .name
          }
        </FolderTitle>

        <ContentSideBar>
          <FileComponent
            files={
              filterFolders(foldersContentAndInfo, selectedFolderInNavigation)
                .files
            }
          />
        </ContentSideBar>
      </FolderContentDiv>
      </SmallWinWrapper>
      /* <FolderSidebar>
        <SmallWinBar>
          <CircleDiv
            backgroundColor="red"
            onClick={() => setOpenedWindow(false)}
          >
            <div>
              <IoClose />
            </div>
          </CircleDiv>
          <CircleDiv backgroundColor="yellow"> </CircleDiv>
          <CircleDiv backgroundColor="green"> </CircleDiv>
        </SmallWinBar>
        <WindowSideBar>
          {foldersContentAndInfo.map((folder) => {
            console.log(
              "if selected folder ",
              folder.id === selectedObj.id,
              folder.id
            );
            return (
              <SideBarItem
                selected={
                  folder.id ===
                  foldersContentAndInfo[selectedFolderInNavigation].id
                    ? true
                    : false
                }
                onClick={() => setSelectedFolderInNavigation(folder.id)}
              >
                {folder.name}
              </SideBarItem>
            );
          })}
        </WindowSideBar>
      </FolderSidebar>
      <FolderContentDiv>
        <FolderTitle>
          <PreviousNextDiv>
            <FaChevronLeft />
            <FaChevronRight />
          </PreviousNextDiv>
          {foldersContentAndInfo[selectedFolderInNavigation].name}
        </FolderTitle>

        <ContentSideBar>
          <FileComponent
            files={foldersContentAndInfo[selectedFolderInNavigation].files}
          />
        </ContentSideBar>
      </FolderContentDiv> */
    
  );
};

export default WindowLayout;
