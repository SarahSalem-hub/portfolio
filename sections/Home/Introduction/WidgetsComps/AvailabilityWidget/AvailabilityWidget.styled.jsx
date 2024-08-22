import { Fredoka, ShantellSans } from "@/components/fonts";
import styled from "@emotion/styled";
import { Indie_Flower } from "next/font/google";

export const AvailableContainer = styled.div`
    width: auto;
    /* height: 80px; */
    border-radius: 25px;
    padding: 15px;
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    /* gap: 18px 14px; */
    flex-shrink: 0;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: -1px 0px 20px 5px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    @media screen and (max-width: 900px){
        width: fit-content;
        height: fit-content;
        flex-direction: row;
        padding: 10px;
        /* top: 130px;
        left: 50%;
        transform: translate(-50%, -50%); */
        /* align-items: end; */
    }
`

export const ActiveSign = styled.div`
    width: 12px;
    height: 12px;
    /* background-color: #44950a; */
    /* margin-top: 5px; */
    background-color: #3AB67D;

    border-radius: 50%;
    box-shadow: 0px 0px 11px 0px #44950a;
    flex-shrink: 0;

`

export const ActiveTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 2px;
    transform: translateY(-5px);
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