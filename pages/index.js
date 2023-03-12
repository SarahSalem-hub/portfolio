import Content from "@/components/Content/Content";
import Head from "next/head";


// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

export default function Home({setRefValue}) {
 
  return (
    <>
      <Head>
        <title>Sarah's portfolio</title>
      </Head>
      <main>
          <Content setRefValue={setRefValue}/>
      </main>
    </>
  );
}
