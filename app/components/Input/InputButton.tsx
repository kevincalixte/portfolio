import React from "react";
type InputButtonProps = {
  icon?: React.ReactNode;
  color?: string;
};
const InputButton = ({ icon, color }: InputButtonProps) => {
  return (
    <div
      className={`${color} text-white rounded-full size-8 p-2 border border-white/20 shadow-2xl flex justify-center items-center`}
    >
      {icon}
    </div>
  );
};

export default InputButton;
