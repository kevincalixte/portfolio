"use client";
import { useState } from "react";
import {
  FaApple,
  FaBatteryFull,
  FaBluetoothB,
  FaCloud,
  FaWifi,
} from "react-icons/fa";
import Menu from "../Menu/Menu";

const Top = () => {
  const [click, setClick] = useState(false);
  return (
    <nav
      className="flex items-center justify-between w-full h-10 
      [&_ul]:flex [&_ul]:items-center [&_ul]:gap-5
      [&_li]:cursor-pointer"
    >
      <ul>
        <li className="text-md relative">
          <FaApple />
          <span className="absolute left-0 top-7">
            <Menu id={1} width="min-w-75" />
          </span>
        </li>
        <li className="font-extrabold relative">
          Portfolio
          <span className="absolute left-0 top-7">
            <Menu id={2} width="min-w-75" />
          </span>
        </li>
        <li>My first website</li>
        <li>My first group project</li>
        <li>My first work project</li>
        <li className="relative">
          My other projects
          <span className="absolute left-0 top-7">
            <Menu id={3} width="min-w-75" />
          </span>
        </li>
        <li>Contact Me</li>
      </ul>

      <ul>
        <li className="flex items-center gap-1">
          <FaCloud className="text-lg" /> 5°
        </li>
        <li>
          <FaBluetoothB className="text-lg" />
        </li>
        <li>
          <FaWifi className="text-lg" />
        </li>
        <li>
          <FaBatteryFull className="text-lg" />
        </li>
        <li>Thurs 29 jan 8:45 PM</li>
      </ul>
    </nav>
  );
};

export default Top;
