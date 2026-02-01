import React from "react";
import Window from "../Window/Window";
import Draggable from "../Draggable/Draggable";
import WindowButton from "../Window/WindowButton";
import { RxCrossCircled, RxMinus } from "react-icons/rx";
import { AiOutlineAlignCenter, AiOutlineArrowsAlt } from "react-icons/ai";
import { BiFolderPlus } from "react-icons/bi";
import { CgViewCols, CgViewComfortable } from "react-icons/cg";
import Ligne from "../Menu/Ligne";
import Note from "./Note";
const Notes = () => {
  return (
    <Draggable>
      <Window width="w-[55vw]" height="h-[70vh]" classname="flex">
        <div className="bg-[#261F20] w-2/4 h-full inset-0 rounded-2xl flex">
          <Window width="w-1/4" height="h-[97.5%]" classname="absolute m-2">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at bottom left, rgba(255,0,64,0.25) 0%, transparent 70%)",
              }}
            />
            <nav className="flex pl-3 justify-between items-center">
              <div className={`flex space-x-2 text-[0.5rem] text-black`}>
                <WindowButton color="#FF5C5F">
                  <RxCrossCircled />
                </WindowButton>
                <WindowButton color="#FAC800">
                  <RxMinus />
                </WindowButton>
                <WindowButton color="#34C759">
                  <AiOutlineArrowsAlt />
                </WindowButton>{" "}
              </div>
              <div className="flex p-2 text-2xl space-x-4 opacity-80">
                <BiFolderPlus />
                <CgViewComfortable />
              </div>
            </nav>
          </Window>
          <div className="w-1/2"> </div>

          <div className="pl-6 pr-3 pt-3 flex flex-col w-1/2">
            <span className="font-bold">Notes</span>
            <span className="text-xs text-gray-200 opacity-50">1 note</span>
            <span className="text-md font-bold mt-5">Aujourd'hui</span>
            <span className="w-full mt-2 h-px bg-white/15 inline-block "></span>

            {/* Liste des notes */}
            <Note title="Title" text="Example text" date="02:45" />
          </div>
        </div>
        {/* 3eme partie */}
        <div className="">
          <nav></nav> 

          <span className="text-xs text-white/50 font-semibold ">Creation : 1 Feb 2026 at 02:43 AM</span>
        </div>
      </Window>
    </Draggable>
  );
};

export default Notes;
