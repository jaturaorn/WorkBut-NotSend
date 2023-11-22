import Realtime_ParaRsub from "./Realtime_ParaRsub";

const Realtime_ParaR = () => {
  return (
    <div
      className="w-[860px] h-[300px] shadow-lg flex p-2 
    border border-slate-300 bg-white mt-2"
    >
      <div className="flex flex-col w-full h-full gap-y-2">
        <div className="flex justify-end gap-3">
          <button className="btn btn-active text-white">STAND BY</button>
          <button className="btn btn-active btn-error text-white">
            {" "}
            &lt; 60{" "}
          </button>
          <button class="btn btn-active btn-accent text-white">70</button>
          <button className="btn btn-active btn-primary text-white">90</button>
        </div>
        <Realtime_ParaRsub />
      </div>
    </div>
  );
};

export default Realtime_ParaR;
