import Image from "next/image";
import Picair from "../../../public/asset/img/2b_Filled.jpg";
import Realtime_ParaRsub_ab from "./Realtime_ParaRsub_ab";

const Realtime_ParaRsub = () => {
  return (
    <div className="relative w-full overflow-scroll">
      <Realtime_ParaRsub_ab />
      <Image
        src={Picair}
        width={300}
        height={300}
        alt="Picair"
        className="w-full"
      />
    </div>
  );
};

export default Realtime_ParaRsub;
