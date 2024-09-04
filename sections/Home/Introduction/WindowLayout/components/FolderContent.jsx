import React from "react";
import {
  ContentSideBar,
  FolderContentDiv,
  FolderTitle,
  ListFolder,
  PreviousNextDiv,
} from "../window.styled";
import { GrFormNext } from "react-icons/gr/index.js";
import FileComponent from "../../FileComponent/FileComponent";
import { ListViewTable } from "./ListViewTable";

const FolderContent = ({ onMouseDown, filteredFolders }) => {
  return (
    <FolderContentDiv>
      <FolderTitle onMouseDown={onMouseDown}>
        <PreviousNextDiv>
          <GrFormNext size={22} color="#3a4156" />
        </PreviousNextDiv>
        {filteredFolders.name}
      </FolderTitle>

      {!filteredFolders.isList ? (
        <ContentSideBar>
          <FileComponent files={filteredFolders.files} />
        </ContentSideBar>
      ) : (
        <>
          {filteredFolders.files ? (
            <ListFolder>
              <ListViewTable filteredFolders={filteredFolders} />
            </ListFolder>
          ) : null}
        </>
      )}
    </FolderContentDiv>
  );
};

export default FolderContent;
