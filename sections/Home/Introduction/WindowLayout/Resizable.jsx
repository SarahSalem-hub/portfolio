import { useCallback, useEffect, useState } from "react";

export const Resizable = ({ children, minWidth }) => {
  const [node, setNode] = useState(null);

  const ref = useCallback((nodeEle) => {
    setNode(nodeEle);
  }, []);

  const handleMouseDown = useCallback(
    (e) => {
      if (!node ) {
        return;
      }

      const parent = node.parentElement;
      const startPos = {
        x: e.clientX,
      };
      const styles = window.getComputedStyle(parent);
      const initialWidth = parseInt(styles.width, 10);

      const handleMouseMove = (e) => {
        const dx = e.clientX - startPos.x;
        const newWidth = initialWidth + dx;

        if (newWidth >= parseInt(minWidth) ) {
          parent.style.width = `${newWidth}px`;
        }
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        resetCursor();
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      updateCursor();
    },
    [node, minWidth]
  );

  const updateCursor = () => {
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  const resetCursor = () => {
    document.body.style.removeProperty("cursor");
    document.body.style.removeProperty("user-select");
  };

  useEffect(() => {
    if (!node ) {
      return;
    }
    console.log("node is ", node.parentElement )
    node.addEventListener("mousedown", handleMouseDown);

    return () => {
      node.removeEventListener("mousedown", handleMouseDown);
    };
  }, [node]);

  return children({ ref });
};
