export default function TitleBox() {
  return (
    <>
      <div className="mt-32 relative">
        <div className="onam-box flex flex-col gap-50 justify-center items-center">
          <div className="flex justify-start w-[100vw] ml-[20vw]">
            <p className="csea text-left">CSEA Presents</p>
          </div>
          {/** SIMON */}
          <div className="buttons">
            <button className="btn-1 flex justify-center items-center">
              contribute
            </button>
            <button className="btn-2 flex justify-center items-center">
              program reg
            </button>
          </div>
        </div>
        <div className="flex absolute sm:-bottom-80 -bottom-65 z-2 justify-end items-end">
          <img className=" hidden xl:block" src="cseonam-desktop.png"></img>
          <img className=" sm:hidden" src="cseonam-mobile.png"></img>
          <img
            className=" hidden sm:block xl:hidden"
            src="cseonam-tab.png"
          ></img>
        </div>
      </div>
    </>
  );
}
