import Top from "./components/Nav/Top";
import Bottom from "./components/Nav/Bottom";
import Message from "./components/Message/Message";
import Draggable from "./components/Draggable/Draggable";

export default function Home() {
  return (
    <div className={`text-white bg-transparent text-sm px-3 h-dvh flex flex-col relative`}>
      <Top />
      <Draggable>
      {/* <Message/> */}`
      <></>
      </Draggable >
      <Bottom />
    </div>
  );
}