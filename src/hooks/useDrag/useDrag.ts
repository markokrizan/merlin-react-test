import { useState, useEffect } from "react";

enum DRAG_STATES {
  READY = "READY",
  DRAGGING = "DRAGGING",
  DRAG_START = "DRAG_START",
}

const useDrag = ({
  data,
  effect,
  draggablElementRef,
  onDragStart,
  onDragOver,
  onDragEnd,
}: {
  data: any;
  effect?: "none" | "copy" | "link" | "move";
  draggablElementRef: any;
  onDragStart?: () => void;
  onDragOver?: () => void;
  onDragEnd?: () => void;
}) => {
  const [dragState, updateDragState] = useState(DRAG_STATES.READY);

  const handleDragStart = (event: DragEvent) => {
    updateDragState(DRAG_STATES.DRAG_START);

    event.dataTransfer.dropEffect = effect;
    event.dataTransfer.setData("source", data);

    onDragStart && onDragStart();
  };

  const handleDragOver = () => {
    updateDragState(DRAG_STATES.DRAGGING);

    onDragOver && onDragOver();
  };

  const handleDragEnd = () => {
    updateDragState(DRAG_STATES.READY);

    onDragEnd && onDragEnd();
  };

  useEffect(() => {
    const element = draggablElementRef.current;

    if (element) {
      element.setAttribute("draggable", true);
      element.addEventListener("dragstart", handleDragStart);
      element.addEventListener("dragover", handleDragOver);
      element.addEventListener("dragend", handleDragEnd);

      return () => {
        element.removeEventListener("dragstart", handleDragStart);
        element.removeEventListener("dragover", handleDragOver);
        element.removeEventListener("dragend", handleDragEnd);
      };
    }
  }, [draggablElementRef]);

  return {
    dragState,
  };
};

export default useDrag;
