import {
  FaApple,
  FaBatteryFull,
  FaBluetoothB,
  FaCloud,
  FaWifi,
} from "react-icons/fa";
import { ImFinder } from "react-icons/im";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh">
      <nav
        className="flex items-center justify-between w-full h-10 text-white bg-transparent 
      [&_li]:cursor-pointer text-sm px-3 
      [&_ul]:flex [&_ul]:items-center [&_ul]:gap-5"
      >
        <ul>
          <li className="text-lg">
            <FaApple />
          </li>
          <li className="font-extrabold">Portfolio</li>
          <li>My first website</li>
          <li>My first group project</li>
          <li>My first work project</li>
          <li>My others projects</li>
          <li>Contact Me</li>
        </ul>
        <ul>
          <li className="flex items-center gap-1">
            <FaCloud /> 5°
          </li>
          <li>
            <FaBluetoothB />
          </li>
          <li>
            <FaWifi />
          </li>
          <li>
            <FaBatteryFull />
          </li>
          <li>Jeu. 29 janv. 20:45</li>
        </ul>
      </nav>

      <div className="flex items-end justify-center h-screen mb-3">
        <nav className="w-1/4 h-19 rounded-3xl text-white backdrop-blur-md border border-white/20 shadow-lg ">
        
        <ul>
          {/* <li className=""><ImFinder className="text-black"/></li> */}
        </ul>
        
        </nav>
      </div>
    </div>
  );
}
