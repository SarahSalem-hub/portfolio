import React, { useRef, useState } from "react";
import { SmallWinWrapper } from "./window.styled";
import useDraggable from "../../../../hooks/useDraggable";
import { filterFolders } from "./helpers";
import useClickOutside from "@/hooks/useClickOutside";
import FolderSideBarComp from "./components/FolderSideBarComp";
import FolderContent from "./components/FolderContent";

const WindowLayout = ({
  setOpenedWindow,
  foldersContentAndInfo,
  selectedObj,
}) => {
  const [selectedFolderInNavigation, setSelectedFolderInNavigation] = useState(
    selectedObj.id
  );
  const divRef = useRef(null);
  const clickOutside = useClickOutside(divRef, setOpenedWindow); // for closing the folder
  const { position, onMouseDown } = useDraggable(50, 50, divRef); // for moving the folder

  const filteredFolders = filterFolders(
    foldersContentAndInfo,
    selectedFolderInNavigation
  ); // function for getting the selected folder obj

  return (
    <SmallWinWrapper ref={divRef} position={position}>
      <FolderSideBarComp
        onMouseDown={onMouseDown}
        setOpenedWindow={setOpenedWindow}
        filterFolders={filterFolders}
        setSelectedFolderInNavigation={setSelectedFolderInNavigation}
        foldersContentAndInfo={foldersContentAndInfo}
        selectedFolderInNavigation={selectedFolderInNavigation}
      />
      <FolderContent
        onMouseDown={onMouseDown}
        filteredFolders={filteredFolders}
      />
    </SmallWinWrapper>
  );
};

export default WindowLayout;
