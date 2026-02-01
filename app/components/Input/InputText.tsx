import React from "react";

type InputTextProps = {
  placeholder?: string;
  width?: string;
  heigth?: string;
  border?: string;
};
const InputText = ({ placeholder, width, heigth, border }: InputTextProps) => {
  return (
    <input
      type="text"
      className={`bg-[#1B1B1B] rounded-4xl ${border} border-white/20 shadow-md ${width} ${heigth}  p-2.5`}
      placeholder={placeholder}
    ></input>
  );
};

export default InputText;
