export const handleClickOutside = (event,divRef,setOpenedWindow) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
        setOpenedWindow(false);
    }
  };
  
  export const handleEscape = (event,setOpenedWindow) => {
    if (event.key === 'Escape') {
        setOpenedWindow(false);
    }
  };

