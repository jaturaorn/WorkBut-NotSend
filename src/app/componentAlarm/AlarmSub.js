import AlarmSub1 from "./AlarmSub1";
import AlarmSub2 from "./AlarmSub2";
import AlarmSub3 from "./AlarmSub3";

const AlarmSub = () => {
  return (
    <section
      className="flex flex-col px-2 py-2 gap-2 max-sm:px-1 
max-sm:py-1 max-sm:gap-1 ml-[162px]"
    >
      <p className="font-bold">Alarm History</p>
      <div
        className="w-full shadow-lg flex flex-col 
              p-4 rounded-lg border border-slate-300 
              bg-white max-sm:p-2 overflow-hidden"
      >
        <div
          className="flex space-x-2 justify-end mb-3 
      max-sm:space-x-1 max-sm:justify-start"
        >
          <p className="text-lg font-bold">Date :</p>
          <div className="flex gap-x-2 max-sm:gap-x-1">
            <input
              type="text"
              placeholder="2023/04/59"
              className="w-[100px] outline outline-1"
            />
            <p className="font-bold bg-slate-400 p-2">to</p>
            <input
              type="text"
              placeholder="2023/04/59"
              className="w-[100px] outline outline-1"
            />
            <button className="bg-[#5A6EE6] px-2 py-1 rounded max-sm:py-0">
              ok
            </button>
            <button className="bg-[#28A745] px-2 py-1 rounded">download</button>
          </div>
        </div>
        <div
          className="inline-flex justify-end rounded-md shadow-sm 
    max-sm:justify-center max-sm:pb-3"
          role="group"
        >
          <button
            type="button"
            className="px-2 py-2 text-sm font-medium text-gray-900 bg-transparent 
      border border-gray-900 rounded-l-lg hover:bg-[#5C5470] bg-[#6C757D]
      hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 
      focus:bg-gray-900 focus:text-white"
          >
            CSV
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 
      bg-transparent border-t border-b border-gray-900 hover:bg-[#5C5470] 
      hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 
      focus:bg-gray-900 focus:text-white bg-[#6C757D]"
          >
            PDF
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 
      bg-transparent border border-gray-900 rounded-r-md hover:bg-[#5C5470] 
      hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 
      focus:bg-gray-900 focus:text-white bg-[#6C757D]"
          >
            Print
          </button>
        </div>
        <AlarmSub1 />
        <AlarmSub2 />
        <AlarmSub3 />
      </div>
    </section>
  );
};

export default AlarmSub;
