import Title from "./title";

export default function TitleBox() {
  return (
    <>
      <div className="mt-16 md:mt-32 relative">
        <div className="onam-box flex flex-col justify-center items-center">
          <div className="flex justify-start w-[100vw] pl-8 md:pl-25 pt-20">
            <p className="csea">CSEA Presents</p>
          </div>
          <div>
            <Title></Title>
          </div>
          <div className="buttons">
            <a href="https://forms.gle/9qbSp5kFviTrYeHE6" target="_blank">
              <button className="btn-1 flex justify-center items-center">
                contribute
              </button>
            </a>
            <a href="https://forms.gle/dej1ZGdbdQJsQXDB7" target="_blank">
              <button className="btn-2 flex justify-center items-center">
                program reg
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
