import { Edu } from "@/components/fonts";
import styled from "@emotion/styled";

export const ClockContainer = styled.div`
    width: 14rem;
    height: 140px;
    /* position: absolute; */
    /* left: 40px;
    top: 160px; */
    border-radius: 25px;
    /* outline: 1px solid grey; */
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px 7px;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: -1px 0px 20px 5px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    flex-shrink: 0;

    @media screen and (max-width: 900px){
        /* min-width:; */
        width: max-content;
        height: fit-content;
        flex-direction: row;
        padding: 10px;
        /* top: 130px;
        left: 50%;
        transform: translate(-50%, -50%); */
        align-items: end;
    }
`

export const Time = styled.div`
    /* background-color: aqua; */
    font-size: 40px;
    color: #fb5456;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: start;
    font-family: ${Edu.style.fontFamily};
    gap: 0px 7px;

    div {
       
        /* padd: 0; */
    }

    @media screen and (max-width: 900px){
       font-size: 25px;
       
    }

`
export const PmAm = styled.p`
     font-size: 10px;
    color: #351a8d;
    font-family: ${Edu.style.fontFamily};

    @media screen and (max-width: 900px){
       font-size: 7px;
    }
    
`
export const DateDiv = styled.div`
    font-size: 20px;
    /* background-color: green; */
    font-family: ${Edu.style.fontFamily};

    @media screen and (max-width: 900px){
       font-size: 13px;
      
    }
`