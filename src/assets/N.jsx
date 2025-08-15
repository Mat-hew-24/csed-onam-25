{
  /*<div className="flex">
      <div className="bg-teal-400 h-27 mt-5 ml-6">111</div>
      <div className="bg-teal-400 h-27 mt-5 rounded-t-full">
        1111111111111111
        <div className="bg-black h-27 ml-5 w-15 rounded-t-full">
          1111111111111
        </div>
      </div>
    </div>
    */
}
export default function N() {
  return (
    <>
      <div className="w-32 h-32 relative">
        <div className="h-25 absolute w-8 ml-6 mt-7 bg-teal-400">
          <div className="h-25 w-26 mt-7 absolute bg-teal-400 left-3 top-[-28%] rounded-t-full">
            <div className="h-20 w-15 mt-7 absolute bg-black left-4 top-0 rounded-t-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
