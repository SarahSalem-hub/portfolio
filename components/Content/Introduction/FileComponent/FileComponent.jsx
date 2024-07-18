import React from 'react'
import { FileContainer, FileImage, FileName } from './FileComponent.styled'
import Image from 'next/image'
import { getFileIconUrl } from '@/utils/firebase';

const FileComponent = ({files}) => {

  // function sendRequest(url){
  //   const xhr = new XMLHttpRequest();
  //   xhr.responseType = "document";
  //   xhr.onload = (event) => {
  //     const blob = xhr.response;
  //   };
  //   xhr.open('GET', url);
  //   xhr.send();
  // }
  
  // function sendRequest(url){
  //   const xhr = new XMLHttpRequest();
  //   xhr.responseType = 'blob';
  //   xhr.onload = (event) => {
  //     const blob = xhr.response;
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = 'resume.pdf'; // You can customize the filename here
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //     window.URL.revokeObjectURL(url);
  //   };
  //   xhr.open('GET', url);
  //   xhr.send();
  // }
  
 


  
  return (
    <>
    {files ? files.map((file)=>{

      return (
        <FileContainer key={file.id} onClick={()=> console.log("content",file)}>
        <FileImage>
          {/* <a href={"#"} onClick={()=>sendRequest(file.url)}> */}
            <Image id='iconImg' src={ file.fileIcon} alt='file icon' fill />
            {/* </a> */}
            {/* <Image src={"/assets/images/file-pdf-svgrepo-com.svg"} alt='file icon' fill />  */}
        </FileImage>
        <FileName>
            {file.name}
        </FileName>
    </FileContainer>)
    })
    : null
    
  }
    </>
  )
}

export default FileComponent