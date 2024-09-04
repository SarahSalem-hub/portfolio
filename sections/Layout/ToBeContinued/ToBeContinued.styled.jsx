import { Fredoka, pS2P, sacramento } from "@/components/fonts";
import styled from "@emotion/styled";

export const TobeContDiv = styled.div`
    height: 300px;
    /* height: 100%; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    /* background-color: blueviolet; */

    & svg{
        position: absolute;
        bottom: 0;
       
    }

`

export const ShadowDiv = styled.div`
position: absolute;
z-index: 0;
/* display: flex;
justify-content: stretch; */
/* background-color: aqua; */
/* align-items: center; */
    height: 100%;
    width: 100%;
    /* background: radial-gradient(103.03% 224.05% at 7% 45%, #ffc68f 0%, #ffc68f 85%); */
    /* opacity: 0.5; */
    /* filter: blur(24px);
     border-radius: 9999px; */
`
export const ToBeText = styled.div`
text-shadow: 1px 0px 0px rgb(0 0 0 / 40%);
    font-size: calc(10px + 1vw);
    /* color: #a08787; */
    color: #ef777d;
    letter-spacing: 3px;
    font-family: ${Fredoka.style.fontFamily};
     z-index: 10;
    text-align: center;
    margin : 5px 0 19px 0;

  
`