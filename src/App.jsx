import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Images from "./Images";
import TitleBox from "./TitleBox";

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="box w-screen scr">
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
