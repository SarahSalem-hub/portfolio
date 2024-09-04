import React from "react";
import { Resizable } from "../Resizable";
import {
  IconAndTitleContainer,
  ListFolderItem,
} from "../window.styled";
import Image from "next/image";
import Link from "next/link";
import ListViewCategory from "./ListViewCategory";


export const ListViewTable = ({ filteredFolders }) => {
  return (
    <table>
      <TableHead />
      <TableBody filteredFolders={filteredFolders}/>
      
    </table>
  );
};


const TableHead = () => {
  return (
    <thead>
      <tr>
        {["Name", "Category", "Website"].map((title, index) => (
          <Resizable key={title} minWidth="150px">
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
  );
};

const TableBody = ({filteredFolders}) => {
    return <tbody>
    {filteredFolders.files.map((file, index) => {
      const imageFaviconLink = `https://www.google.com/s2/favicons?domain=https://${file.website}&sz=32`;

      return (
        <ListFolderItem key={index} linkColor={file.link ? true : false}>
          <td>
            {(() => {
              const content = (
                <IconAndTitleContainer>
                  <Image
                    src={imageFaviconLink}
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
            <ListViewCategory file={file} />
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
      );
    })}
  </tbody>
}

