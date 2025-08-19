import "./App.css";
import Content from "./Content";
import Title from "./title";

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
