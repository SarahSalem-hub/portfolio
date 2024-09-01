import React, { useEffect, useRef, useState } from "react";
import {
  CategoriesContainer,
  CategoryBox,
  CircleDiv,
  ContentSideBar,
  FolderContentDiv,
  FolderSidebar,
  FolderTitle,
  IconAndTitleContainer,
  ListFolder,
  ListFolderItem,
  PreviousNextDiv,
  SideBarItem,
  SmallWinBar,
  SmallWinWrapper,
  WindowSideBar,
} from "./window.styled";
import { IoClose } from "react-icons/io5/index.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa/index.js";
import FileComponent from "../FileComponent/FileComponent";
import { handleClickOutside, handleEscape } from "./eventHandlers";
import useDraggable from "../../../../hooks/useDraggable";
import { filterFolders } from "./helpers";
import useClickOutside from "@/hooks/useClickOutside";
import { HiFolderOpen } from "react-icons/hi/index.js";
import { GrFormFolder, GrFormNext } from "react-icons/gr/index.js";
import { Resizable } from "./Resizable";
import Link from "next/link";
import Image from "next/image";

const WindowLayout = ({
  setOpenedWindow,
  foldersContentAndInfo,
  selectedObj,
  windowsArray,
}) => {
  const [selectedFolderInNavigation, setSelectedFolderInNavigation] = useState(
    selectedObj.id
  );
  const [openedWinds, setopenedWinds] = useState();
  const divRef = useRef(null);
  const clickOutside = useClickOutside(divRef, setOpenedWindow);
  // const { refs, columnWidths, handleMouseDown } = useResizable(200);

  const { position, onMouseDown } = useDraggable(50, 50, divRef);
  // console.log("windowsArray inside ",windowsArray)
  useEffect(() => {
    const opened = foldersContentAndInfo.filter((folder) => {
      return windowsArray.some((window) => {
        console.log(" folder.id === window", folder.id === window);
        return folder.id === window;
      });
    });
    setopenedWinds(opened);

    console.log("opened", opened);
    // console.log("windowsArray inside ",windowsArray)
  }, [windowsArray, foldersContentAndInfo]);

  const filteredFolders = filterFolders(
    foldersContentAndInfo,
    selectedFolderInNavigation
  );

  return (
    <SmallWinWrapper ref={divRef} position={position}>
      <FolderSidebar>
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
        <WindowSideBar>
          {foldersContentAndInfo.map((folder) => {
            if (!folder.swipeToSection) {
              return (
                <SideBarItem
                  key={folder.id}
                  selected={
                    folder.id ===
                    filterFolders(
                      foldersContentAndInfo,
                      selectedFolderInNavigation
                    ).id
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
      </FolderSidebar>
      <FolderContentDiv>
        <FolderTitle onMouseDown={onMouseDown}>
          <PreviousNextDiv>
            {/* <FaChevronLeft />
            <FaChevronRight /> */}
            {/* <HiFolderOpen size={22} color="#3a4156"/> */}
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
                <table>
                  <thead>
                    <tr>
                      {["Name", "Category", "Website"].map((title, index) => (
                        <Resizable
                          key={title}
                          minWidth="150px" // Set a minimum width that fits content
                        >
                          {({ ref }) => (
                            <th className="column">
                              {title}

                              <div className="resizer" ref={ref} />
                            </th>
                          )}
                        </Resizable>
                      ))}
                    </tr>
                    <tr>
                      <th id="dividerRow" colspan="6"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredFolders.files.map((file, index) => (
                      <ListFolderItem
                        key={index}
                        linkColor={file.link ? true : false}
                      >
                        <td>
                          {(() => {
                            const content = (
                              <IconAndTitleContainer>
                                <Image
                                  src={`https://www.google.com/s2/favicons?domain=https://${file.website}&sz=32`}
                                  alt="icon"
                                  width={13}
                                  height={13}
                                  priority
                                />
                                <div id="text">{file.title}</div>
                              </IconAndTitleContainer>
                            );

                            return file.link ? (
                              <Link href={file.link} target="_blank">
                                {content}
                              </Link>
                            ) : (
                              content
                            );
                          })()}
                        </td>
                        <td>
                          <CategoriesContainer>
                            {file.category
                              ? file.category.map((category, idx) => (
                                  <CategoryBox key={idx}>
                                    {category}
                                  </CategoryBox>
                                ))
                              : null}
                          </CategoriesContainer>
                        </td>
                        <td>
                          {file.link ? (
                            <Link href={file.link} target="_blank">
                              {file.website}
                            </Link>
                          ) : (
                            file.website
                          )}
                        </td>
                        <td></td>
                      </ListFolderItem>
                    ))}
                  </tbody>
                </table>
              </ListFolder>
            ) : null}
          </>
        )}
      </FolderContentDiv>
    </SmallWinWrapper>
  );
};

export default WindowLayout;
