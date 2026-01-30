import React from "react";
import { BiCommand } from "react-icons/bi";
import { FaInfo } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import Ligne from "./Ligne";

type MenuProps = {
  width?: string;
  height?: string;
};
const Menu = ({ width, height }: MenuProps) => {
  width = "min-w-72";
//   height = "h-48";
  return (
    <div className="">
      <div
        className={`[&_span]:font-medium [&_span]:flex [&_span]:items-center [&_span]:gap-3 bg-black/30 
    rounded-2xl transition-all duration-200 ease-in-out
          backdrop-blur-md border border-white/20 shadow-2xl
           flex flex-col
           ${width} ${height} `}
      >
        {/* Menu Portfolio */}
        <Ligne
          text="À propos de moi"
          icon={<ImInfo />}
          command={<BiCommand />}
        />

          <Ligne
          text="Bonjour visiteur ! Je m'appelle Kévin, Développeur Web Full Stack Junior en devenir. Sur ce site vous saurez-tout de moi, ou presque ! Je vous laisse donc explorer 😉"
        />

      </div>
    </div>
  );
};

export default Menu;
