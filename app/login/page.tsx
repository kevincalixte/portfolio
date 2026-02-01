import React from "react";
import Top from "../components/Nav/Top";

const login = () => {
  return (
    <div className="flex flex-col justify-between items-center border min-h-screen ">

      <Top />
      <div className="flex flex-col items-center">
        <span>Sun 1 Feb</span>
        <span>01:50</span>
      </div>

      <div>
        <span>logo</span>
        <span>Kevin Calixte</span>
        <div>
          <input type="text" className="rounded-2xl bg-white/50" />
          <span>?</span>
        </div>
        <span>Enter your password to connect</span>
      </div>
    </div>
  );
};

export default login;
