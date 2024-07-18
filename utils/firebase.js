import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBX-DGKR1oZJsBdwlaCqqyH1WbRRirblzQ",
  authDomain: "myportfolio-5ed94.firebaseapp.com",
  projectId: "myportfolio-5ed94",
  storageBucket: "myportfolio-5ed94.appspot.com",
  messagingSenderId: "191396035524",
  appId: "1:191396035524:web:2eda2cf084f4f6b1110291",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);



export const fetchProjects = async () => {
  const projectsColl = collection(db, "projects");
  const getProjsDocs = await getDocs(projectsColl);
  const getProjs = getProjsDocs.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return getProjs;
};

export const fetchLikes = async () => {
  const likesColl = collection(db, "aboutMeLikes");
  const getLikesDoc = await getDocs(likesColl);
  const likes = getLikesDoc.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return likes;
};

export const updateLikes = async (prevCount, operator) => {
  const docRef = doc(db, "aboutMeLikes", "jmx8zaHI1FOm8iiRbOCH");
  const equation = `{ "expression": "${prevCount}${operator}1" }`;
  const jsonObject = JSON.parse(equation);

  const result = eval(jsonObject.expression);
  setDoc(docRef, { count: result });
};

export const fetchFolders = async () => {
  const foldersColl = collection(db, "folders");
  const getFoldersDocs = await getDocs(foldersColl);
  const folders = getFoldersDocs.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return folders;
};


export async function getFileIconUrl(imageRef){
  const iconRef = ref(storage, imageRef);
  let url = '';
  url = await getDownloadURL(iconRef);
  console.log("url",url)
  return url 
  // try {
  //   url = await getDownloadURL(iconRef);
  //   return url 
  // } catch (error) {
  //   console.error("Failed to fetch file image url ", error);
  // }
}