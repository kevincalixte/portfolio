import React from "react";
import Window from "../Window/Window";
import WindowButton from "../Window/WindowButton";
import {
  AiOutlineAlignCenter,
  AiOutlineArrowsAlt,
  AiOutlineMinus,
} from "react-icons/ai";
import { BiArrowToLeft, BiCross, BiMinus, BiSearch } from "react-icons/bi";
import { RxCross1, RxMinus } from "react-icons/rx";
import InputText from "../Input/InputText";
import InputButton from "../Input/InputButton";
import { PiPlus } from "react-icons/pi";
import { RiEmojiStickerFill } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";
import { BsEmojiSmile, BsEmojiSmileFill } from "react-icons/bs";
const Messages = () => {
  return (
    <div>
      <Window
        width="w-[50vw]"
        height="h-[75vh]"
        classname="pl-2"
        draggable={true}
      >
        <div className="w-full h-full flex items-center">
          <Window width="w-1/3" height="h-[98%]" classname="relative">
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at bottom left, rgba(255,0,64,0.25) 0%, transparent 70%)",
              }}
            />
            <nav className="flex p-3 justify-between">
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
              <div>
                <AiOutlineAlignCenter />
              </div>
            </nav>
            <InputText
              placeholder="Recherche"
              width="w-[95%]"
              heigth="h-8"
              border="border-0"
            />
          </Window>
          <div className="w-2/3 px-2 flex flex-col h-full justify-between py-2">
            <InputText width="w-full" border="border" />
            <div></div>
            <nav className="flex items-center justify-between">
              <InputButton icon={<PiPlus />} color="bg-[#1B1B1B]" />
              <InputText width="w-[85%]" heigth="h-8" border="border" />
              <InputButton icon={<BsEmojiSmileFill />} color="bg-[#1B1B1B]" />
            </nav>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default Messages;
