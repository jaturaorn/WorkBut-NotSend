import { FaTemperatureHalf } from "react-icons/fa6";

const OverviewP2 = () => {
  return (
    <div
      className="w-[263px] h-24 shadow-lg flex max-sm:w-full max-lg:w-1/3
  p-3 rounded-lg border border-slate-300 bg-white
  max-md:overflow-hidden max-md:w-1/2"
    >
      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-x-3">
          <FaTemperatureHalf size={23} color="blue" />
          <h4>
            Irradiance(W/m<sup>2</sup>)
          </h4>
        </div>
        <div className="flex justify-end">
          <p className="text-3xl font-semibold text-indigo-600">0.00</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewP2;
