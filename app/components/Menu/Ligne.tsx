import React from "react";
import { BiCommand } from "react-icons/bi";
import { ImInfo } from "react-icons/im";

type LigneProps = {
  text: string;
  icon?: React.ReactNode;
  command?: React.ReactNode;
  separation?: boolean;
};
const Ligne = ({ text, icon, command, separation }: LigneProps) => {
  return (
    <>
      <div
        className="flex items-center justify-between mx-2 my-1 p-1 rounded-lg
      hover:bg-[#FD0D24]/60"
      >
        {/* Menu Portfolio */}
        <span>
         {icon}
          {text}
         
        </span>
        <span className="opacity-50">{command}</span>
      </div>
      {separation ? (
        <span className="w-[90%] h-px bg-white/20 inline-block m-auto"></span>
      ) : (
        ""
      )}
    </>
  );
};

export default Ligne;
