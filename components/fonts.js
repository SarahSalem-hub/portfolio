import { Mynerve, Sacramento } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { Fredoka_One } from "next/font/google";

export const mynerve = Mynerve({
    subset: ["cursive"],
    preload: false,
    weight: "400",
  });
  
  export const sacramento = Sacramento({
    subsets: ["latin-ext"],
    weight: "400",
  });
  
  export const pS2P = Press_Start_2P({
    subsets: ["latin"],
    weight: "400",
  });

  export const Fredoka = Fredoka_One({
    subsets: ["latin"],
    weight: "400",
  })