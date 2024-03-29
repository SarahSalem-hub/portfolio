import React from "react";
import {
  ImageAndDetails,
  LinksDiv,
  ProBarName,
  ProDetails,
  ProImg,
  ProWindow,
  ProWindowBar,
  ProjContainer,
  ProjImageDiv,
  ProjLoadingDiv,
  Title,
} from "./ProjSection.styled";
import { FaCode, FaHotjar } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { Fredoka } from "@/components/fonts";
import { TbLink, TbLinkOff } from "react-icons/tb";
import { EmojiSize } from "../AboutMeTab/AboutMeTab.styled";
import { BiSolidHot } from "react-icons/bi";
import { Box, Skeleton } from "@mui/material";

function SingleProjectComp({
  id,
  name,
  image,
  description,
  github,
  link,
  priority,
}) {
  return (
    <ProjContainer key={name ? name : "0"}>
      <ProWindowBar>
        <ProBarName>
          <FaCode className="Icon" size={40} />
          {name ? (
            <div className="flex justify-around">
              <Title>{name}</Title>
              <EmojiSize>
                {priority === "0" ? (
                  <FaHotjar size={25} color="cb9940" />
                ) : null}
              </EmojiSize>
            </div>
          ) : (
            <Skeleton variant="text" sx={{ width: "150px" }} />
          )}
        </ProBarName>
        <div className="flex flex-row">
          <FiMinus className="Icon" size={40} />
          <IoClose className="Icon" size={40} />
        </div>
      </ProWindowBar>

      <ProWindow>
        <Link href={`SingleProject/${id}`}>
          <ImageAndDetails>
            <ProjImageDiv>
              {image ? (
                <ProImg src={image} alt="project" />
              ) : (
                <Box sx={{ pt: 0.5 }} className=" flex justify-center flex-col w-full">
                   <Skeleton variant="rectangular" width="100%" height="231px" />
                  <Skeleton width="100%"/>
                  <Skeleton width="60%" />
                </Box>
              )}
            </ProjImageDiv>
            <ProDetails>
              <Title className={Fredoka.className} style={{ fontSize: "18px" }}>
                {description ? `${description.substring(0, 120)} ...`:
                 <Skeleton width="60%" />}
              </Title>
            </ProDetails>
          </ImageAndDetails>
        </Link>
        <LinksDiv>
          <div>
            <Link href={link ? link : "#"} target="_blank">
              {link ? (
                <TbLink className="Icon" size={20} />
              ) : (
                <TbLinkOff className="Icon" size={20} />
              )}
            </Link>
            <Link href={github ? github : "#"} target="_blank">
              {/* <AiFillGithub className="Icon" size={40} /> */}
              {github ? <AiFillGithub className="Icon" size={25} /> : null}
            </Link>
          </div>
        </LinksDiv>
      </ProWindow>
    </ProjContainer>
  );
}

export default SingleProjectComp;
