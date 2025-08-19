import "./App.css";
import Content from "./Content";
import Header from "./Header";
import TitleBox from "./TitleBox";

function App() {
  return (
    <>
      <div className="relative h-[2059px]">
        <div className="box w-screen h-[1536px]">
          <Title />
          <Content></Content>
        </div>
      </div>
    </>
  );
}

export default App;
