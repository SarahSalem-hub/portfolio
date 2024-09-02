import styled from '@emotion/styled'

export const WidgContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 40px;
    /* top: 160px; */
    /* background-color: blue; */
    gap: 20px;

    @media only screen and (min-width: 701px) and (max-width: 1024px){
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (max-width: 700px){
        /* width: fit-content;
        height: auto;
        top: 150px;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        flex-wrap: wrap;
        position: unset;
        /* top: 100px;
        left: 0px;  */
        
    }
`