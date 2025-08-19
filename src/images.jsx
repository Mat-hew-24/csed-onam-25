export default function images() {
  return (
    <>
      <div className="flex justify-end items-end bg-red-600">
        <img className=" hidden xl:block" src="cseonam-desktop.png"></img>
        <img className=" sm:hidden" src="cseonam-mobile.png"></img>
        <img className=" hidden sm:block xl:hidden" src="cseonam-tab.png"></img>
      </div>
    </>
  );
}
