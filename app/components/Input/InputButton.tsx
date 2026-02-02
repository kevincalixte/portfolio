import React from "react";
type InputButtonProps = {
  icon?: React.ReactNode;
  color?: string;
  text?: string;
  classname?:string;
  onclick?: React.MouseEventHandler;
};
const InputButton = ({ icon, color,text, classname,onclick}: InputButtonProps) => {
  return (
    <div
      className={`${color} text-white rounded-full ${classname ?  classname : "size-8" } p-2 border border-white/20 shadow-2xl flex justify-center items-center`}
      onClick={onclick}
    >
      {icon}
      {text}
    </div>
  );
};

export default InputButton;
