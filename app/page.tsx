import Top from "./components/Nav/Top";
import Bottom from "./components/Nav/Bottom";

export default function Home() {
  return (
    <div className={`text-white bg-transparent text-sm px-3 h-dvh flex flex-col`}>
      <Top />
      <Bottom />
    </div>
  );
}