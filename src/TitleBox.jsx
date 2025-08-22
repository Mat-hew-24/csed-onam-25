import Title from "./title";

export default function TitleBox() {
  return (
    <>
      <div className="mt-32 relative">
        <div className="onam-box flex flex-col justify-center items-center">
          <div className="flex justify-center w-[100vw]">
            <p className="csea">CSED Presents</p>
          </div>
          <div>
            <Title></Title>
          </div>
          <div className="buttons">
            <button className="btn-1 flex justify-center items-center">
              contribute
            </button>
            <button className="btn-2 flex justify-center items-center">
              program reg
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
