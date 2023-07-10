import "@/styles/globals.css";
import { createContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import WindowBarComp from "@/components/WindowBarComp/WindowBarComp";
export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);
  const [urlName, setUrlName] = useState("SarahSalem.com");
  const projectSection = useRef();
  const tabs = useRef();

  return (
    <>
      <UserContext.Provider value={{projectSection,tabs}}>
        <WindowBarComp
          urlName={urlName}
          isActive={isActive}
          setActive={setActive}
          setUrlName={setUrlName}
        />
        <Component {...pageProps}  />
      </UserContext.Provider>
    </>
  );
}
