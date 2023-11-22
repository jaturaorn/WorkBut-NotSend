import Realtime_ParaL from "./Realtime_ParaL";
import Realtime_ParaR from "./Realtime_ParaR";

const Realtime_parameter = () => {
  return (
    <div className="flex gap-3.5">
      <div className="flex flex-col w-full mt-3">
        <h3>Realtime_parameter</h3>
        <Realtime_ParaL />
      </div>
      <div className="flex flex-col w-full mt-3">
        <h3>Inverter Performance</h3>
        <Realtime_ParaR />
      </div>
    </div>
  );
};

export default Realtime_parameter;
