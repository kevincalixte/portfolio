import React, { useState } from "react";

type NoteProps = {
  title: string;
  text: string;
  date: string;
};
const Note = ({ title, text, date }: NoteProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected((prev) => !prev)}
      className={` mt-2 rounded-md px-3 py-2 flex flex-col  ${selected ? "bg-[#FF5257]" : "bg-[#464646]"} `}
    >
      <span className="font-bold"> {title}</span>
      <span className="flex items-center gap-3">
        <span className="text-xs">{date}</span>
        <span className="text-xs text-white/60">{text}</span>
      </span>
    </div>
  );
};

export default Note;
