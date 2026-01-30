import React from "react";
import { BiCommand } from "react-icons/bi";
import { ImInfo } from "react-icons/im";

type LigneProps = {
  text: string;
  icon?: React.ReactNode;
  command?: React.ReactNode;
  separation?: boolean
};
const Ligne = ({ text, icon, command, separation}: LigneProps) => {
  return (
    <>
      <div
        className="flex items-center justify-between px-5 py-2 p-1
      hover:bg-[#FD0D24]/60"
      >
        {/* Menu Portfolio */}
        <span className="">
         
          {icon}
          {text}
        </span>
        <span className="opacity-40">
        
          {command}
        </span>
      </div>
      {separation ? (<span className="w-[95%] h-px bg-white/20 inline-block"></span>): ""}

    </>
  );
};

export default Ligne;
