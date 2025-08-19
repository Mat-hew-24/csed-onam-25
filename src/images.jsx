export default function Images() {
  return (
    <>
      <div className="flex absolute fixImg z-2 ">
        <img className=" hidden xl:block" src="cseonam-desktop.png"></img>
        <img className=" sm:hidden" src="cseonam-mobile.png"></img>
        <img className=" hidden sm:block xl:hidden" src="cseonam-tab.png"></img>
      </div>
    </>
  );
}
