"use client"
import React, { useState } from "react";

const Draggable = ({ children }: { children: React.ReactNode }) => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [drag, setDrag] = useState(false);

  return (
    <div
      onMouseDown={() => setDrag(true)}
      onMouseUp={() => setDrag(false)}
      onMouseMove={e => {
        if (drag) setPos({ x: e.clientX, y: e.clientY });
      }}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        cursor: "move",
        zIndex: 0,
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
