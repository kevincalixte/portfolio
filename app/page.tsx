import Top from "./components/Nav/Top";
import Bottom from "./components/Nav/Bottom";

export default function Home() {
  return (
    <div className={`bg-transparent text-sm px-3 h-dvh flex flex-col relative`}>
      <Top />
      <Bottom />
    </div>
  );
}
