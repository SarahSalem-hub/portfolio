import React, { useContext, useEffect, useState } from "react";
import {
  DecoratedText,
  DetailsOuterDiv,
  ExternalIntroDiv,
  HelloDiv,
  IconsContainer,
  ImageDiv,
  IntroDescription,
  IntroDetailsBox,
  IntroDiv,
  IntroEmoji,
  IntroPic,
  Nameh1,
  ScreenIconsDiv,
  StyledAnimatedImage,
} from "./IntroSection.styled";
import introImage from "../../../public/assets/images/intro-image.jpg";
import { useSpring } from "@react-spring/web";
import orangeHat from "../../../public/assets/images/pamela-hat.png";
import WindowLayout from "./WindowLayout/WindowLayout";
import FolderIcon from "./FolderIcon/FolderIcon";
import { fetchFolders } from "@/utils/firebase";
import { DataContext, useData } from "@/pages";
import { useFoldersContentAndInfo } from "./data.js"
import { filterFolders } from "./WindowLayout/helpers";
import Image from "next/image";
import Clock from "./WidgetsComps/ClockWidget/Clock";
import AvailabilityWidget from "./WidgetsComps/AvailabilityWidget/AvailabilityWidget";
import { WidgetsComps } from "./WidgetsComps/WidgetsComps";


const windowLayoutData = [
  { id: 0, left: -100, top: 100, side: "top" },
  { id: 1, right: 100, top: 160 },
  { id: 2, right: -50, top: 400 },
  { id: 3, left: -20, top: 369 },
  { id: 4, left: 600, top: 10, side: "top" },
  { id: 5, left: 600, top: 600 },
];
// const { folders } = useContext(DataContext);
// const foldersContentAndInfo = [
//   {
//     id: 0,
//     name: "CV",
//     content: "my cv",
//     files: [
//       {
//         id: 0,
//         name: "Sarah Aldhaferi resume.pdf",
//         fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
//         url:imageUrl
//       },
//     ],
//   },
//   { id: 1, name: "Blogs", content: "my blogs",
//     files: [
//       {
//         id: 0,
//         name: "first blog.pdf",
//         fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
//       },
//       {
//         id: 1,
//         name: "second blog.pdf",
//         fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
//       },
//       {
//         id: 2,
//         name: "second blog.pdf",
//         fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
//       }, {
//         id: 3,
//         name: "second blog.pdf",
//         fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
//       },
//       {
//         id: 4,
//         name: "second blog.pdf",
//         fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
//       },
//     ],
//   },
//   { id: 2, name: "current-project", content: "my project" },
//   { id: 3, name: "study-sources", content: "my study sources" },
// ];



const IntroSection = () => {
  // const foldersContentAndInfo = useFoldersContentAndInfo();
  const [shownhat, setHat] = useState(false);
  const show = useSpring({
    opacity: shownhat ? 1 : 0,
    display: shownhat ? "inline-block" : "none",
  });
  const [openedWindow, setOpenedWindow] = useState(false); // track whether folder opened or not
  const [folderIndex, setFolderiIndex] = useState("");//index of opened folder
  const { folders } =  useContext(DataContext);

  const [fetchedFolders, setFetchedFolders] = useState()
  const [windowsArray, setWindowsArray] = useState([]) 

  
  useEffect(() => {
    if (folderIndex) {  // Ensure folderIndex is not empty or undefined
      setWindowsArray(prevArray =>Array.from( new Set([...prevArray, folderIndex])) );
    }
  }, [folderIndex])

  

  console.log("windowsArray",new Set(windowsArray))

  return (
    <ExternalIntroDiv>
      <IntroDiv id="intro">
        <IntroDetailsBox>
          <DetailsOuterDiv onClick={() => setOpenedWindow(false)}>
            <div className="relative">
              <HelloDiv>Hello, I&apos;m</HelloDiv>

              <Nameh1>Sarah Salem</Nameh1>
              {/* <StyledAnimatedImage
                style={{
                  opacity: show.opacity,
                }}
                alt="profile pic"
                src={orangeHat}
                width="70"
                height="70"
              /> */}
            </div>

            <IntroDescription font="calc(8px + 0.07vw)" lineHeight={true}>
              A Front-End Web Developer
            </IntroDescription>

            <IntroDescription
              font="calc(7.3px + 0.4vw)"
              makeMargin={true}
              letterSpacing="true"
              lineHeight={true}
            >
              A<DecoratedText color="#ce7e31"> Software Engineer</DecoratedText>{" "}
              and a recent{" "}
              <IntroEmoji>
                <Image width="20"
                  height="20"
                  src="https://img.icons8.com/color/96/000000/student-female.png"
                  alt="student-female"/>
               
              </IntroEmoji>{" "}
              from the frontend bootcamp at{" "}
              <a
                href="https://www.re-coded.com/"
                target="_blank"
                style={{ color: "#fb5456" }}
              >
                <DecoratedText color="#fb5456">Re:Coded</DecoratedText>
              </a>{" "}
              ,this is my portfolio that I&apos;ve made and
              I&apos;m looking forward to enhance it{" "}
              <IntroEmoji>
                <Image
                width={100}
                height={100}
                  src="https://img.icons8.com/color/48/maintenance.png"
                  alt="maintenance"/>
                
              </IntroEmoji>{" "}
              and fill it with my future projects
              <IntroEmoji>
                <Image  width="25"
                  height="25"
                  src="https://img.icons8.com/color/48/sparkling.png"
                  alt="sparkling"/>
                
              </IntroEmoji>
              .
            </IntroDescription>
            
          </DetailsOuterDiv>
          <ScreenIconsDiv>
            <IconsContainer>
              {folders.map((folder) => {
                return (
                  <FolderIcon
                    key={folder.id}
                    folder={folder}
                    setOpenedWindow={setOpenedWindow}
                    setFolderiIndex={setFolderiIndex}
                    
                  />
                );
              })}
              
            </IconsContainer>
          </ScreenIconsDiv>
        </IntroDetailsBox>
        {openedWindow && (
         
          <WindowLayout
            selectedObj={filterFolders(folders,folderIndex)}
            foldersContentAndInfo={folders}
            setOpenedWindow={setOpenedWindow}
            windowsArray={windowsArray}
          />
        )}
       
      </IntroDiv>
      <WidgetsComps/>
    </ExternalIntroDiv>
  );
};

export default IntroSection;




 // <WindowLayout
          //   selectedObj={foldersContentAndInfo[folderIndex]}
          //   foldersContentAndInfo={foldersContentAndInfo}
          //   setOpenedWindow={setOpenedWindow}
          // />