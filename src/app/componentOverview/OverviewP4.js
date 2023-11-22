import { MdOutlineWindPower } from "react-icons/md";

const OverviewP4 = () => {
  return (
    <div
      className="w-[263px] h-24 shadow-lg flex max-sm:w-full max-lg:w-1/3
p-3 rounded-lg border border-slate-300 bg-white
max-md:overflow-hidden max-md:w-1/2"
    >
      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-x-3">
          <MdOutlineWindPower size={23} color="green" />
          <h4>
            Module Temperature(<sup>•</sup>c)
          </h4>
        </div>
        <div className="flex justify-between">
          <progress
            className="progress progress-accent w-36 mt-5"
            value="40"
            max="100"
          ></progress>
          <p className="text-3xl font-semibold text-indigo-600">0.00</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewP4;
