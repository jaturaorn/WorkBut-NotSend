import EnegryLsub from "./EnegryLsub";

const EnegryL = () => {
  return (
    <div
      className="w-[465px] h-[300px] shadow-lg flex p-2 
border border-slate-300 bg-white mt-2"
    >
      <div className="flex flex-col w-full h-full gap-y-1.5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-[#9C9EB2] text-sm">Factory Load</p>
            <p className="text-xl font-semibold text-[#1946BA]">123.15 kWh</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary">Power</button>
            <button className="btn btn-neutral">Enegry</button>
          </div>
        </div>
        <EnegryLsub />
      </div>
    </div>
  );
};

export default EnegryL;
