import React from 'react'
import { FileContainer, FileImage, FileName, FileTypeIcon, ImageLayout } from './FileComponent.styled'
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
  
 const filesTypes = [
   {
     id: 0,
     name: "pdf",
     icon: "/assets/images/logotype.svg",
   },
   {
     id: 1,
     name: "medium",
     icon: "/assets/images/Medium-Logo-Black-RGB.svg",
   },
 ];

 const getTypeIcon = (file)=>{
  const firebaseType = filesTypes.find(type=> {
    return type.name === file.type
  })
  return firebaseType.icon
 }
  

  return (
    <>
    {files ? files.map((file)=>{
     
      return (
        <FileContainer key={file.id} onClick={()=> console.log("content",file)}>
        <FileImage>
          {/* <a href={"#"} onClick={()=>sendRequest(file.url)}> */}
          <ImageLayout>
          <Image src={"/assets/images/document back side.svg"} alt="" width={100} height={100}/>
          <Image src={"/assets/images/document front side.svg"} alt="" width={100} height={100}/>

          <Image id='iconImg' src={ file.fileIcon} alt='file icon' fill/>
          <FileTypeIcon>
           
            <Image src={getTypeIcon(file)} alt='file type'width={100} height={100}/>
          </FileTypeIcon>
          </ImageLayout>
         
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