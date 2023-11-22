import { MdElectricBolt, MdOutlineAccessTime } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsSun } from "react-icons/bs";
import { FcElectricity } from "react-icons/fc";
import { PiWarningOctagon } from "react-icons/pi";

const Navbarsub = () => {
  return (
    <div className="flex justify-between ml-[168px] pt-2 mr-2">
      <div className="flex items-center">
        <p className="font-semibold text-indigo-700">BGCG</p>
        <div className="flex">
          <IoIosArrowForward />
        </div>
        <p className="font-semibold text-indigo-700">Login</p>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-x-2">
          <MdElectricBolt size={23} color="blue" />
          <p className="bg-emerald-500 text-white text-center">0000</p>
        </div>
        <div className="flex gap-x-2">
          <FcElectricity size={23} />
          <p className="bg-slate-400 text-white text-center">00 kWh</p>
        </div>
        <div className="flex gap-x-2">
          <BsSun size={23} color="orange" />
          <p className="bg-orange-500 text-white text-center">0000</p>
        </div>
        <div className="flex gap-x-2">
          <PiWarningOctagon size={23} color="blue" />
          <p className="bg-slate-400 text-white text-center">0</p>
        </div>
        <div className="flex gap-x-2">
          <MdOutlineAccessTime size={23} color="blue" />
          <p className="text-indigo-600">05/07/2023 12:30</p>
        </div>
      </div>
    </div>
  );
};

export default Navbarsub;
