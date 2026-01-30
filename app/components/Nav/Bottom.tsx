import React from "react";
import Icon from "./Icon";

const Bottom = () => {
  return (
    <div className="flex justify-center items-end h-screen mb-3">
      <nav className="w-1/4 h-19 rounded-3xl text-white backdrop-blur-md border border-white/20 shadow-lg hover:scale-107">
        <ul className="flex h-full items-center justify-evenly 
        [&_li]:cursor-pointer  [&_li]:hover:scale-107 hover:scale-105 transition-transform ease-in-out duration-200">
          <li><Icon img="/assets/imgs/macOS/icons/finder.png"/></li>
          <li><Icon img="/assets/imgs/macOS/icons/brave.png"/></li>
          <li><Icon img="/assets/imgs/macOS/icons/vscode.png"/></li>
          <li><Icon img="/assets/imgs/macOS/icons/docker.png"/></li>
          <li><Icon img="/assets/imgs/macOS/icons/terminal.png"/></li>
          <li><div className="w-px h-13 bg-white/33"></div></li>
          <li><Icon img="/assets/imgs/macOS/icons/bin.png"/></li>   
        </ul>
      </nav>
    </div>
  );
};

export default Bottom;
