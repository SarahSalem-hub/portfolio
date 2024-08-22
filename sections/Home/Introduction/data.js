// import useDataContext from './useDataContext';

import { useContext } from 'react';
import { DataContext } from "@/pages";

const useDataContext = () => {
    return useContext(DataContext);
};
export const  useFoldersContentAndInfo = () => {
    const { pdf } = useDataContext();
    console.log("pdf",pdf)
    const foldersContentAndInfo = [
        {
          id: 0,
          name: "CV",
          content: "my cv",
          files: [
            {
              id: 0,
              name: "Sarah Aldhaferi resume.pdf",
              fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
              url:pdf
            },
          ],
        },
        { id: 1, name: "Blogs", content: "my blogs",
          files: [
            {
              id: 0,
              name: "first blog.pdf",
              fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
            },
            {
              id: 1,
              name: "second blog.pdf",
              fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
            },
            {
              id: 2,
              name: "second blog.pdf",
              fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
            }, {
              id: 3,
              name: "second blog.pdf",
              fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
            },
            {
              id: 4,
              name: "second blog.pdf",
              fileIcon: "/assets/images/file-pdf-svgrepo-com.svg",
            },
          ],
        },
        { id: 2, name: "current-project", content: "my project" },
        { id: 3, name: "study-sources", content: "my study sources" },
      ];

      return foldersContentAndInfo
}
