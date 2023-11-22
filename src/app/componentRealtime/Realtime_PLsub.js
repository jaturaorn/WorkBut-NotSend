import { MdElectricBolt } from "react-icons/md";

const Realtime_PLsub = () => {
  return (
    <div className="flex justify-center gap-2.5">
      <div className="flex gap-3.5 items-center">
        <MdElectricBolt size={25} color="yellow" />
        <p className="font-bold text-3xl text-white">0.00</p>
        <p>MWh</p>
      </div>
    </div>
  );
};

export default Realtime_PLsub;
