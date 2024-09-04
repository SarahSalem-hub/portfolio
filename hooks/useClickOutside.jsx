import { useEffect } from "react";

export default function useClickOutside(divRef,setOpenedWindow ){


    const handleClickOutside = (event,divRef,setOpenedWindow) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setOpenedWindow(false);
        }
      };
      
    const handleEscape = (event,setOpenedWindow) => {
        if (event.key === 'Escape') {
            setOpenedWindow(false);
        }
      };
    
    

    useEffect(() => {
        const handleClick = (event) =>
          handleClickOutside(event, divRef, setOpenedWindow);
        const handleKeyDown = (event) => handleEscape(event, setOpenedWindow);
    
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKeyDown);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [divRef, setOpenedWindow]);
}