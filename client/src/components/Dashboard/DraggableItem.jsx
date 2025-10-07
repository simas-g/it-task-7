import React from "react";
import Draggable from "react-draggable";
export default function DraggableItem({ item, onStop, children }) {
  const defaultPosition = {
    x: item.x || 0,
    y: item.y || 0,
  };

  const handleStop = (e, data) => {
    onStop(item.id, data.x, data.y);
  };

  return (
    <Draggable
      defaultPosition={defaultPosition}
      bounds="parent"
      onStop={handleStop}
    >
      <div
        style={{ position: "absolute", cursor: "grab", zIndex: 100 }}
        className="draggable-content-wrapper"
      >
        {children}
      </div>
    </Draggable>
  );
}
