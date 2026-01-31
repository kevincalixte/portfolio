import React from "react";

type WindowButtonProps = {
  color: string;
};
const WindowButton = ({ color }: WindowButtonProps) => {
  return <div className="rounded-full size-3.5" style={{ background: color }}></div>;
};

export default WindowButton;
