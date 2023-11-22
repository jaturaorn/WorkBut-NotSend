import Generated_Equal2 from "./Generated_Equal2";
import Generated_Equal3 from "./Generated_Equal3";
import Generated_Equal4 from "./Generated_Equal4";

// react-icons
import { MdCo2 } from "react-icons/md";

const Generated_Equal1 = () => {
  return (
    <div className="container mx-auto mt-3">
      <h3>Generated Equal</h3>
      <div className="grid grid-cols-4 gap-2 mt-3">
        <div
          className="w-[325px] h-[140px] shadow-lg flex p-2 
          border border-slate-300 bg-white"
        >
          <div className="flex flex-col w-full h-full gap-y-1.5">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Co2 Saved</p>
              <MdCo2 size={40} color="blue" />
            </div>
            <div>
              <p className="text-3xl text-indigo-600 font-semibold">
                0.00<sup>•</sup> Tons
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">* 1kWh = 0.000703 ton</p>
            </div>
          </div>
        </div>
        <Generated_Equal2 />
        <Generated_Equal3 />
        <Generated_Equal4 />
      </div>
    </div>
  );
};

export default Generated_Equal1;
