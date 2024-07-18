import { useState, useRef, useEffect, useCallback } from 'react';

const useDraggable = (initialLeftPercent, initialTopPercent,externalRef) => {
  const [position, setPosition] = useState({ left: initialLeftPercent, top: initialTopPercent });
  const draggingRef = useRef(false); //is used to track the dragging state




  const onMouseDown = (e) => {
    draggingRef.current = true;
    e.preventDefault();
  };

  const onMouseMove = useCallback((e) => {
    if (draggingRef.current && externalRef.current) {
      const parent = externalRef.current.parentElement;
      const deltaX = (e.movementX / parent.clientWidth) * 100;
      const deltaY = (e.movementY / parent.clientHeight) * 100;
      
      console.log("deltaX",deltaX, "deltaY",deltaY)
      setPosition((prev) => ({
        left: prev.left + deltaX,
        top: prev.top + deltaY,
      }));
    }
  }, [externalRef]);

  const onMouseUp = useCallback(() => {
    draggingRef.current = false;
   }, [draggingRef]);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return {
    position,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};

export default useDraggable;
