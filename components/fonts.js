import { Annie_Use_Your_Telescope, Caveat_Brush, Edu_NSW_ACT_Foundation, Indie_Flower, Mynerve, Nerko_One, Reenie_Beanie, Sacramento, Shantell_Sans, Syncopate } from "next/font/google";
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

  export const AnnieUseYourTelescope = Annie_Use_Your_Telescope({
    subsets: ["latin"],
    weight: "400",
  })


  export const Syncopatee = Syncopate({
    subsets: ["latin"],
    weight: ["400","700"],
  })

  export const Edu = Edu_NSW_ACT_Foundation({
    subsets: ["latin"],
    weight: ["400","700"],
  })

export const ShantellSans = Shantell_Sans({
  subsets: ["latin"],
    weight: ["300"],
    style: "italic"
})
