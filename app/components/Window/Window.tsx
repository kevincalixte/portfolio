import React from "react";
import Draggable from "../Draggable/Draggable";

type WindowProps = {
  width: string;
  height: string;
  classname?: string;
  draggable?: boolean;
  children?: React.ReactNode;
};
const Window = ({ width, height, classname, draggable, children }: WindowProps) => {
  const content = (
      <div
        className={`${width} ${height} ${classname} bg-[#1E1E1E] rounded-2xl border border-white/20 shadow-2xl`}
      >
        {children}
      </div>
  );

  return draggable ? <Draggable>{content}</Draggable> : content;
};

export default Window;
