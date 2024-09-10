import { Fredoka, ShantellSans } from "@/components/fonts";
import styled from "@emotion/styled";
import { Indie_Flower } from "next/font/google";

export const SmallCorner = styled.div`
        
    /* position: absolute; */
        /* background-color: aliceblue; */
        /* z-index: 5;
        bottom: 0;
        left: 0; */
        width: 20px;
        height: 40px;
        border-top-left-radius:20px;
        /* border-radius: 16px; */
    /* box-shadow: -1px 0px 20px 5px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); */
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-right: none;
    /* border-bottom-right-radius: 0; */
    border-bottom-left-radius: 16px;
    background:rgb(251 239 223);
    
`

export const BoxWrapper = styled.div`
    /* width: 220px; */
    /* height: 100px; */
    /* background-color: aqua; */
    display: flex;
    justify-content: start;
    align-items: end;
    position: relative;
    /* position: relative;
    ::before {
        content: '';
        
    } */
     filter: drop-shadow(-1px 0px 20px rgba(0, 0, 0, 0.1));
     /* -1px 0px 20px 5px rgba(0, 0, 0, 0.1); */
     /* ::after{
        content: '';
    width: 10px;
    height: 10px;
    bottom: 41%;
    position: absolute;
    z-index: 10;
    -webkit-mask: none;
    mask: none;
    -webkit-filter: none;
    filter: none;
    border-top-left-radius: 10px; */
    /* border: 1px solid black; */
    /* width: 0;
    height: 0;
    border-left: 19px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 13px solid #fbefdf; */
    /* border-radius: 50%; */
    /* border-bottom-right-radius: 6px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(172deg);
    } */

    /* ::before{
        content: '';
   
    top: 0;
    left: 20px;
    position: absolute;
    z-index: 10;
    -webkit-mask: none;
    mask: none;
    -webkit-filter: none;
    filter: none;
    border-top-left-radius: 10px; */
    /* border: 1px solid black; */
    /* width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid blue;

    transform: rotate(172deg);
    } */
`
export const BoxFirstPart = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #a77171;
    justify-content: end;
`

export const AvailableContainer = styled.div`
    /* max-width: 14rem; */
    height: fit-content;
    /* width: 80px; */
    /* width: calc(100% - 10px); */
    /* height: 80px; */
    border-radius: 25px;
    padding: 15px;

    padding-left: 40px;
    /* background-color: aliceblue; */
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    /* gap: 18px 14px; */
    flex-shrink: 0;

    background: rgb(251 239 223);;
    border-radius: 16px;
    /* box-shadow: -1px 0px 20px 5px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    @media screen and (max-width: 900px){
        width: fit-content;
        height: fit-content;
        flex-direction: row;
        padding: 10px;
        padding-left: 30px;
        /* top: 130px;
        left: 50%;
        transform: translate(-50%, -50%); */
        /* align-items: end; */
    }
    border-left: none;
    /* border-bottom-left-radius: 0; */
    position: relative;
    --mask:  radial-gradient(19px 18px at 7% 10%, #0000 98%, #af2d2d);
  -webkit-mask: var(--mask);
          mask: var(--mask);
          /* mask-mode: match-source;
          mask-clip: border-box;  */
          filter: drop-shadow(-1px 0px 20px rgba(0, 0, 0, 0.1));
   
`

export const ActiveSign = styled.div`
    width: 19px;
    height: 19px;
    
    /* background-color: #44950a; */
    /* margin-top: 5px; */
    background-color: #3AB67D;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 0px 11px 0px #44950a;
    flex-shrink: 0;
     position: absolute;
     top: -2px;
     left: 8px;
     z-index: 2;
    /*top: 20px;
    left: 10px; */
    

    @media only screen and (min-width: 701px) and (max-width: 1024px){
        width: 15px;
        top: 0px;
        left: 7px;
        height: 15px;
    }

    @media screen and (max-width: 700px){
        width: 13px;
        top: 2px;
        left: 9px;
        height: 13px;
    }

`

export const ActiveTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 2px;
    /* transform: translateY(-5px); */
    @media screen and (max-width: 900px){
        transform: translateY(0px);
        
    }

`

export const ActiveText = styled.p`
    font-size: 15px;
    color: #30333A;
    padding-inline-start: 10px;
    font-family:  ${Fredoka.style.fontFamily};
    letter-spacing: 1px;
    margin: 0;

    @media screen and (max-width: 900px){
       font-size: 11px;
        
    }
`
export const ActiveTextNote = styled.p`
    font-size: 12px;
    color: #7a7a7a;
    padding-inline-start: 10px;
    font-family: ${ShantellSans.style.fontFamily};
    
    letter-spacing: 1px;
    margin: 0;
    /* transform: translateY(-5px); */
    @media screen and (max-width: 900px){
       font-size: 9px;
        
    }
`