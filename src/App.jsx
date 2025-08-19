import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Images from "./Images";
import TitleBox from "./TitleBox";

function App() {
  return (
    <>
      <div className="relative h-[2059px]">
        <div className="box w-screen h-[1536px] scr">
          <Header></Header>
          <TitleBox></TitleBox>
          <Images></Images>
        </div>
        <Content></Content>
      </div>
    </>
  );
}

export default App;
