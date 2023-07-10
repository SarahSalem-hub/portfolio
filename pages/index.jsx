import Content from "@/components/Content/Content";
import { db, fetchProjects } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";


// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

export default function Home({setRefValue, projects}) {
  console.log("content page", projects);
  return (
    <>
      <Head>
        <title>Sarah&apos;s portfolio</title>
      </Head>
      <main>
          <Content setRefValue={setRefValue} projects={projects}/>
      </main>
    </>
  );
}

export async function getStaticProps() {
    const proJs = await fetchProjects()
  return {
      props: {
          projects : proJs
      },
  };
}
