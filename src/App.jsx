import "./App.css";
import Content from "./Content";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="relative h-[2059px]">
        <div className="box w-screen h-[1536px]">
          <Header></Header>
          <Content></Content>
        </div>
      </div>
    </>
  );
}

export default App;
