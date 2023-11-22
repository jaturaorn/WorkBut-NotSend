// react-icons
import { AiOutlineHome } from "react-icons/ai";

const Generated_Equal2 = () => {
  return (
    <div
      className="w-[325px] h-[140px] shadow-lg flex p-2 
   border border-slate-300 bg-white"
    >
      <div className="flex flex-col w-full h-full gap-y-2.5">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Home Uses</p>
          <AiOutlineHome size={30} color="blue" />
        </div>
        <div>
          <p className="text-3xl text-indigo-600 font-semibold">0 Home</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">* if home uses 12.183 kWh</p>
        </div>
      </div>
    </div>
  );
};

export default Generated_Equal2;
