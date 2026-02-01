import React, { useState } from "react";
import Window from "../Window/Window";
import Draggable from "../Draggable/Draggable";
import WindowButton from "../Window/WindowButton";
import { RxCross1, RxCrossCircled, RxMinus } from "react-icons/rx";
import { AiOutlineAlignCenter, AiOutlineArrowsAlt } from "react-icons/ai";
import { BiFolderPlus } from "react-icons/bi";
import { CgViewCols, CgViewComfortable } from "react-icons/cg";
import Ligne from "../Menu/Ligne";
import Note from "./Note";
const Notes = () => {
  const [value, setValue] = useState("");
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
                  <RxCross1 />
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
            <Note
              title="Title"
              text={value.length > 20 ? value.slice(0, 20) + "..." : value}
              date="02:45"
            />
            <Note text="jknsefjsefne" date="enjfenf" title="ejfefefe" key={2} />
          </div>
        </div>
        {/* 3eme partie */}

        <div className="p-3 w-1/2">
          <nav>test</nav>

          <span className="text-xs text-white/50 font-semibold block">
            Creation : 1 Feb 2026 at 02:43 AM
          </span>

          <textarea
            className="w-full h-full focus:outline-none"
            name=""
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </Window>
    </Draggable>
  );
};

export default Notes;
