import { WindowBar } from "@/components/Content/Content.styled";
import { Title } from "@/components/Content/Projects/ProjSection.styled";
import { FaCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { Fredoka } from "../components/fonts";
import "@/styles/globals.css";
import {  useRef, useState } from "react";


export default function App({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);
  const [refValue, setRefValue] = useState("val")
  console.log(refValue,"refValue");

  function scroll(){
    refValue.scrollIntoView({behavior: 'smooth', block: 'start' ,inline:"nearest"});
  }
  return (
    <>
      <WindowBar>
        <div className="flex flex-row items-center w-full relative">
          <FaCode className="Icon" size={40} />
          {/* <Title className={Fredoka.className} style={{fontSize:"18px"}}>The Amazing Portfolio</Title> */}
          <div
            className="flex flex-col w-full   "
            onMouseEnter={() => setActive(true)}
          >
            <div className="bg-white  pl-5 pr-5  min-w-min rounded-xl border-solid border-2 border-black w-full ">
              <Title className={Fredoka.className} style={{ fontSize: "18px" }}>
                SarahSalem.com
              </Title>
              {isActive && (
                <ul
                  className="backdrop-blur-sm absolute top-12 border-solid border-2 w-full  border-black "
                  onMouseLeave={() => setActive(false)}
                >
                  <a href="/About">
                    <li>
                      <Title
                        className={Fredoka.className}
                        style={{ fontSize: "18px" }}
                      >
                        SarahSalem.com/about
                      </Title>
                    </li>
                  </a>
                  <a  href="#projects" onClick={scroll}>
                    <li>
                      <Title
                        className={Fredoka.className}
                        style={{ fontSize: "18px" }}
                      >
                        SarahSalem.com/projects
                      </Title>
                    </li>
                  </a>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <FiMinus className="Icon" size={40} />
          <IoClose className="Icon" size={40} />
        </div>
      </WindowBar>
      <Component {...pageProps} setRefValue={setRefValue} />
    </>
  );
}
