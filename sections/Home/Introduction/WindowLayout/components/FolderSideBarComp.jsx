import React from "react";
import {
  CircleDiv,
  FolderSidebar,
  SideBarItem,
  SmallWinBar,
  WindowSideBar,
} from "../window.styled";
import { IoClose } from "react-icons/io5/index.js";

const FolderSideBarComp = ({
  onMouseDown,
  setOpenedWindow,
  filterFolders,
  setSelectedFolderInNavigation,
  foldersContentAndInfo,
  selectedFolderInNavigation,
}) => {
  return (
    <FolderSidebar>
      <FolderClosingSection
        onMouseDown={onMouseDown}
        setOpenedWindow={setOpenedWindow}
      />
      <SideBar
        filterFolders={filterFolders}
        setSelectedFolderInNavigation={setSelectedFolderInNavigation}
        foldersContentAndInfo={foldersContentAndInfo}
        selectedFolderInNavigation={selectedFolderInNavigation}
      />
    </FolderSidebar>
  );
};

export default FolderSideBarComp;

const FolderClosingSection = ({ onMouseDown, setOpenedWindow }) => {
  return (
    <SmallWinBar onMouseDown={onMouseDown}>
      <CircleDiv
        backgroundColor="var(--primaryGrey)"
        onClick={() => setOpenedWindow(false)}
      >
        <div>
          <IoClose color="#FFF8D1" size={12} />
        </div>
      </CircleDiv>
      <CircleDiv backgroundColor="var(--secondaryRosyPink)"> </CircleDiv>
      <CircleDiv backgroundColor="var(--secondaryPeachOrange)"> </CircleDiv>
    </SmallWinBar>
  );
};

const SideBar = ({
  filterFolders,
  setSelectedFolderInNavigation,
  foldersContentAndInfo,
  selectedFolderInNavigation,
}) => {
  return (
    <WindowSideBar>
      {foldersContentAndInfo.map((folder) => {
        if (!folder.swipeToSection) {
          return (
            <SideBarItem
              key={folder.id}
              selected={
                folder.id ===
                filterFolders(foldersContentAndInfo, selectedFolderInNavigation)
                  .id
              }
              onClick={() => setSelectedFolderInNavigation(folder.id)}
            >
              {folder.name}
            </SideBarItem>
          );
        } else {
          return null;
        }
      })}
    </WindowSideBar>
  );
};
