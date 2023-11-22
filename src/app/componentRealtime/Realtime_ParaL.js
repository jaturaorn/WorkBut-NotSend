import Realtime_PLsub from "@/app/componentRealtime/Realtime_PLsub";
import Realtime_PLsub1 from "./Realtime_PLsub1";
import Realtime_PLsub2 from "./Realtime_PLsub2";

const Realtime_ParaL = () => {
  return (
    <div
      className="w-[465px] h-[300px] shadow-lg flex p-2 
  border border-slate-300 bg-[#4285F4] mt-2"
    >
      <div className="flex flex-col w-full h-full gap-y-2.5">
        <div className="flex justify-center">
          <p className="text-lg text-white">TOTAL ENEGRY</p>
        </div>
        <Realtime_PLsub />
        <Realtime_PLsub1 />
        <Realtime_PLsub2 />
      </div>
    </div>
  );
};

export default Realtime_ParaL;
