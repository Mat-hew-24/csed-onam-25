import "./App.css";
import Content from "./Content";
import Header from "./Header";
import TitleBox from "./TitleBox";

function App() {
  return (
    <>
      <div className="relative h-[2059px]">
        <div className="box w-screen h-[1536px]">
          <Header></Header>
          <TitleBox></TitleBox>
        </div>
        <Content></Content>
      </div>
    </>
  );
}

export default App;
