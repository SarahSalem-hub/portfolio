// import Content from "@/sections/Home/Content";
import HomeComponents from "@/sections/Home/HomeComponents";
import {
  db,
  fetchFolders,
  fetchLikes,
  fetchProjects,
  storage,
} from "@/utils/firebase";
import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import Head from "next/head";
import { createContext, useContext } from "react";

export const DataContext = createContext();

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

export default function Home({
  setRefValue,
  projects,
  likes,
  folders,
  imageUrl,
  pdf,
}) {
  // console.log("folders",folders);
  return (
    <DataContext.Provider value={{ folders, pdf }}>
      <Head>
        <title>Sarah&apos;s portfolio</title>
      </Head>
      <main>
        <HomeComponents setRefValue={setRefValue} projects={projects} likes={likes} />
      </main>
    </DataContext.Provider>
  );
}

// gs://myportfolio-5ed94.appspot.com/SarahAlDhaferiResume(7).pdf

export async function getStaticProps() {
  const proJs = await fetchProjects();
  const likes = await fetchLikes();
  const folders = await fetchFolders();

  const pdfRef = ref(storage, "SarahAlDhaferiResume(7).pdf");
  let pdfUrl = "";

  try {
    pdfUrl = await getDownloadURL(pdfRef);
  } catch (error) {
    console.error("Failed to fetch the PDF URL", error);
  }

  return {
    props: {
      projects: proJs,
      likes: likes,
      folders: folders,
      // imageUrl,
      pdf: pdfUrl,
    },
  };
}

export const useData = () => {
  return useContext(DataContext);
};
