import { BsSlashLg } from "react-icons/bs";

const Realtime_PLsub2 = () => {
  return (
    <div className="h-full w-full bg-white p-2 gap-y-3">
      <div className="flex">
        <div className="ml-14">
          <p>All</p>
        </div>
        <div className="ml-16">
          <p>A</p>
        </div>
        <div className="ml-24">
          <p>B</p>
        </div>
        <div className="ml-[100px]">
          <p>C</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>P</p>
        <p className="px-2.5 text-[#4285F4] font-semibold">0000</p>
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <p>kW</p>
      </div>
      <div className="flex justify-between items-center">
        <p>VLN</p>
        <p className="text-[#4285F4] font-semibold">0000</p>
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <p>V</p>
      </div>
      <div className="flex justify-between items-center">
        <p>VLL</p>
        <p className="text-[#4285F4] font-semibold">0000</p>
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <p>V</p>
      </div>
      <div className="flex justify-between items-center">
        <p>I</p>
        <p className="px-2.5 text-[#4285F4] font-semibold">0000</p>
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <BsSlashLg />
        <p className="text-[#4285F4] font-semibold">0000</p>
        <p>A</p>
      </div>
    </div>
  );
};

export default Realtime_PLsub2;
