import Title from "./title";

export default function TitleBox() {
  return (
    <>
      <div className="mt-16 md:mt-32 relative">
        <div className="onam-box flex flex-col justify-center items-center">
          <div className="flex justify-start w-[100vw] pl-8 md:pl-25 pt-20">
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
