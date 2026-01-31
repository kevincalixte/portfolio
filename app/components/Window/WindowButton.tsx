import React from "react";

type WindowButtonProps = {
  color: string;
  children?: React.ReactNode;
};
const WindowButton = ({ color, children }: WindowButtonProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-full size-3.5"
      style={{ background: color }}
    >
      {children}
    </div>
  );
};

export default WindowButton;
