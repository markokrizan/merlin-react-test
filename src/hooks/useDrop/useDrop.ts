import { useState, useEffect } from "react";

export enum DROP_STATES {
  READY = "READY",
  DROPPED = "DROPPED",
  DRAGGING_OVER = "DRAGGING_OVER",
}

const useDrop = ({
  droppableElementRef,
  onDrop,
}: {
  droppableElementRef: any;
  onDrop: (data: any) => void;
}) => {
  const [dropState, updateDropState] = useState(DROP_STATES.READY);

  const handleDropOver = (event: DragEvent) => {
    event.preventDefault();

    updateDropState(DROP_STATES.DRAGGING_OVER);
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();

    if (event.dataTransfer) {
      onDrop(JSON.parse(event.dataTransfer.getData("source")));
    }

    updateDropState(DROP_STATES.DROPPED);
  };

  useEffect(() => {
    const element = droppableElementRef.current;

    if (element) {
      element.addEventListener("dragover", handleDropOver);
      element.addEventListener("drop", handleDrop);

      return () => {
        element.removeEventListener("dragover", handleDropOver);
        element.removeEventListener("drop", handleDrop);
      };
    }
  }, [droppableElementRef]);

  return {
    dropState,
  };
};

export default useDrop;
