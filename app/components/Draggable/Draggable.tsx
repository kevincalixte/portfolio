"use client"
import React, { useState } from "react";


const Draggable = ({ children }: { children: React.ReactNode }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({
        x: window.innerWidth / 2 - rect.width / 2,
        y: window.innerHeight / 2 - rect.height / 2,
      });
    }
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current && (ref.current as any)._dragging) {
        setPos({
          x: e.clientX - (ref.current as any)._offsetX,
          y: e.clientY - (ref.current as any)._offsetY,
        });
      }
    };
    const handleMouseUp = () => {
      if (ref.current) (ref.current as any)._dragging = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      (ref.current as any)._dragging = true;
      (ref.current as any)._offsetX = e.clientX - rect.left;
      (ref.current as any)._offsetY = e.clientY - rect.top;
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        cursor: "",
        zIndex: 0,
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
