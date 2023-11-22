import { MdOutlineOilBarrel } from "react-icons/md";

const Generated_Equal3 = () => {
  return (
    <div
      className="w-[325px] h-[140px] shadow-lg flex p-2 
border border-slate-300 bg-white"
    >
      <div className="flex flex-col w-full h-full gap-y-2.5">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Gasoline Saved</p>
          <MdOutlineOilBarrel size={30} color="blue" />
        </div>
        <div>
          <p className="text-3xl text-indigo-600 font-semibold">0 Gallons</p>
        </div>
        <div>
          <p className="text-sm text-slate-500">* 1kWh = 0.79256 gallon</p>
        </div>
      </div>
    </div>
  );
};

export default Generated_Equal3;
