import { BsSun } from "react-icons/bs";
import { FaTemperatureHalf } from "react-icons/fa6";
import OverviewP2 from "./OverviewP2";
import OverviewP3 from "./OverviewP3";
import OverviewP4 from "./OverviewP4";

const OverviewP1 = () => {
  return (
    <div className="grid grid-cols-5 gap-2 mt-3">
      <div
        className="w-[263px] h-24 shadow-lg flex max-sm:w-full max-lg:w-1/3
        p-3 rounded-lg border border-slate-300 bg-white
        max-md:overflow-hidden max-md:w-1/2"
      >
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-x-3">
            <BsSun size={23} color="orange" />
            <h4>
              Irradiance(W/m<sup>2</sup>)
            </h4>
          </div>
          <div className="flex justify-end">
            <p className="text-3xl font-semibold text-indigo-600">0.00</p>
          </div>
        </div>
      </div>
      <div
        className="w-[263px] h-24 shadow-lg flex max-sm:w-full max-lg:w-1/3
        p-3 rounded-lg border border-slate-300 bg-white
        max-md:overflow-hidden max-md:w-1/2"
      >
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-x-3">
            <FaTemperatureHalf size={23} color="orange" />
            <h4>
              Module Temperature(<sup>•</sup>c)
            </h4>
          </div>
          <div className="flex justify-between">
            <div className="flex pt-3 gap-x-2">
              <div className="bg-orange-400 px-1">
                <p className="text-sm text-white text-center">1</p>
              </div>
              <p className="text-sm text-indigo-600">0.00</p>
            </div>
            <div className="flex pt-3 gap-x-2">
              <div className="bg-orange-400 px-1">
                <p className="text-sm text-white text-center">2</p>
              </div>
              <p className="text-sm text-indigo-600">0.00</p>
            </div>
            <p className="text-3xl font-semibold text-indigo-600">0.00</p>
          </div>
        </div>
      </div>
      <OverviewP2 />
      <OverviewP3 />
      <OverviewP4 />
    </div>
  );
};

export default OverviewP1;
