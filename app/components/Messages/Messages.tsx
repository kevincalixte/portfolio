import React from "react";
import Window from "../Window/Window";
import WindowButton from "../Window/WindowButton";
import { AiOutlineAlignCenter } from "react-icons/ai";
const Messages = () => {
  return (
    <div>
      <Window
        width="w-[50vw]"
        height="h-[75vh]"
        classname="px-2"
        draggable={true}
      >
        <div className="w-full h-full flex items-center">
          <Window width="w-1/3" height="h-[98%]" classname="relative">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at bottom left, rgba(255,0,64,0.25) 0%, transparent 70%)",
              }}
            />
            <nav className="flex p-3 justify-between">
              <div className="flex space-x-2">
                <WindowButton color="#FF5C5F" />
                <WindowButton color="#FAC800" />
                <WindowButton color="#34C759" />
              </div>
              <div>
                <AiOutlineAlignCenter />
              </div>
            </nav>
          </Window>
        </div>
      </Window>
    </div>
  );
};

export default Messages;
