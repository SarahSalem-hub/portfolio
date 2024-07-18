import styled from "@emotion/styled";

export const FileName = styled.div`
/* background-color: aqua; */
    padding: 5px;
    width: inherit;
    color: black;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`
export const FileImage = styled.div`
   
    position: relative;
    /* height: 100%;
    width: 100%; */
    height: 90px;
    width: 99px;
    
    
`

export const FileContainer = styled.div`
    width: 100%;
    height: fit-content;
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover{
       

        ${FileImage}{
            background-color: #e3b64c46;
            outline: 1px solid #a2a1a1;
            border-radius: 10px;
        }
        ${FileName}{
            white-space: pre-wrap;
            height: max-content;
            width: 90px;
        }
    }

`
// export const FileImage = styled.div`
   
//     position: relative;
//     /* height: 100%;
//     width: 100%; */
//     height: 90px;
//     width: 99px;
    
    
// `
// export const FileName = styled.div`
// background-color: aqua;
//     padding: 5px;
//     width: inherit;
//     color: black;
//     font-size: 14px;
//     text-align: center;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;

// `