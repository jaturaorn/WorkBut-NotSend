// react-icons
import { BsArrowDownUp } from "react-icons/bs";

const AlarmSub2 = () => {
  return (
    <div
      className="flex justify-center max-sm:justify-start
      max-lg:justify-start overflow-x-auto relative"
    >
      <table
        className="border-collapse border border-slate-500 
      table-auto w-full"
      >
        <thead>
          <tr className="flex">
            <th
              className="flex items-center justify-between border border-slate-600 
            px-2 py-2 w-[12.5%] text-[#0D4E9C] font-bold"
            >
              Activation Time <BsArrowDownUp className="text-[#5A6EE6]" />
            </th>
            <th
              className="flex items-center justify-between border border-slate-600 
            px-2 py-2 w-[12.5%] text-[#0D4E9C] font-bold"
            >
              Normalize Time <BsArrowDownUp className="text-[#5A6EE6]" />
            </th>
            <th
              className="flex items-center justify-between border border-slate-600 
            px-2 py-2 w-[12.5%] text-[#0D4E9C] font-bold"
            >
              Plant Name <BsArrowDownUp className="text-[#5A6EE6]" />
            </th>
            <th
              className="flex items-center justify-between border border-slate-600 
            px-2 py-2 w-[12.5%] text-[#0D4E9C] font-bold"
            >
              Device <BsArrowDownUp className="text-[#5A6EE6]" />
            </th>
            <th
              className="flex items-center justify-between border border-slate-600 
            px-2 py-2 w-[12.5%] text-[#0D4E9C] font-bold"
            >
              ERROR Code <BsArrowDownUp className="text-[#5A6EE6]" />
            </th>
            <th
              className="flex items-center justify-between border border-slate-600 
            px-2 py-2 w-[12.5%] text-[#0D4E9C] font-bold"
            >
              Message <BsArrowDownUp className="text-[#5A6EE6]" />
            </th>
            <th
              className="flex items-center justify-between border border-slate-600 
            px-2 py-2 w-[12.5%] text-[#0D4E9C] font-bold"
            >
              Level <BsArrowDownUp className="text-[#5A6EE6]" />
            </th>
            <th className="flex justify-center border border-slate-600 px-2 py-2 w-[12.5%]">
              <button
                className="bg-[#28a745] hover:bg-[#26A042] 
                border-solid py-1 px-2 rounded"
              >
                Ack All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex justify-center text-[#5A6EE6] bg-[#F2F2F2]">
              No data available in table
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AlarmSub2;
