import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBX-DGKR1oZJsBdwlaCqqyH1WbRRirblzQ",
    authDomain: "myportfolio-5ed94.firebaseapp.com",
    projectId: "myportfolio-5ed94",
    storageBucket: "myportfolio-5ed94.appspot.com",
    messagingSenderId: "191396035524",
    appId: "1:191396035524:web:2eda2cf084f4f6b1110291"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const fetchProjects = async ()=>{
  const projectsColl = collection(db, "projects");
  const getProjsDocs = await getDocs(projectsColl);
  const getProjs = getProjsDocs.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return getProjs;
}