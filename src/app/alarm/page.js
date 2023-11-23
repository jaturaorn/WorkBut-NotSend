import Layout from "../component/layout";

import AlarmSub from "../componentAlarm/AlarmSub";

const page = () => {
  return (
    <Layout>
      <section className="flex flex-col p-2 gap-2 max-lg:flex-col flex-wrap ml-[162px]">
        <p className="font-bold">Online Summary</p>
        <div
          className="flex gap-2 max-xl:flex-wrap max-xl:gap-[3px] 
            max-sm:flex-row"
        >
          {/* Box-Left */}
          <div
            className="w-1/6 h-28 shadow-lg flex justify-between 
                p-4 rounded-lg border border-slate-300 max-md:overflow-hidden 
                bg-white max-lg:w-1/3 max-md:w-1/2 max-sm:w-[48.5%]"
          >
            <div className="flex flex-col gap-y-5">
              <p className="text-base">Total Internal Alarm</p>
              <p className="font-bold text-3xl text-[#5A6EE6]">0</p>
            </div>
          </div>
          {/* Box-Left-Mid */}
          <div
            className="w-1/6 h-28 shadow-lg flex justify-between
                p-4 rounded-lg border border-slate-300 max-md:overflow-hidden 
                bg-white max-lg:w-1/3 max-md:w-[49.5%] max-sm:w-[48.5%]"
          >
            <div className="flex flex-col max-md:flex-2 gap-y-5">
              <p>Total System Alarm</p>
              <p className="font-bold text-3xl text-[#5A6EE6]">38</p>
            </div>
          </div>
          {/* Box-Mid */}
          <div
            className="w-1/6 h-28 shadow-lg flex justify-between p-3 
                rounded-lg border-4 border-l-red-500 max-lg:overflow-hidden 
                bg-white max-lg:w-[32.5%] max-md:w-1/2 max-sm:w-[48.5%]"
          >
            <div className="flex flex-col gap-y-5">
              <p>Critical</p>
              <p className="font-bold text-3xl text-[#5A6EE6]">0</p>
            </div>
          </div>
          {/* Box-Mid-Right */}
          <div
            className="w-1/6 h-28 shadow-lg flex justify-between
                p-3 rounded-lg border-4 border-l-yellow-500 
                max-lg:overflow-hidden bg-white max-lg:w-1/3
                max-md:w-[49.5%] max-sm:w-[48.5%]"
          >
            <div className="flex flex-col gap-y-5">
              <p>Minor</p>
              <p className="font-bold text-3xl text-[#5A6EE6]">0</p>
            </div>
          </div>
          {/* Box-Mid-Right */}
          <div
            className="w-1/6 h-28 shadow-lg flex justify-between 
                p-3 rounded-lg border-4 border-l-blue-600 max-sm:w-[48.5%] 
                max-lg:overflow-hidden bg-white max-lg:w-1/3 max-md:w-1/2"
          >
            <div className="flex flex-col gap-y-5">
              <p>Warning</p>
              <p className="font-bold text-3xl text-[#5A6EE6]">0</p>
            </div>
          </div>
          {/* Box-Right */}
          <div
            className="w-1/6 h-28 shadow-lg flex justify-between
                p-3 rounded-lg border-4 border-l-pink-500 max-md:w-[49.5%]
                max-lg:overflow-hidden bg-white max-lg:w-[32.5%] max-sm:w-[48.5%]"
          >
            <div className="flex flex-col gap-y-5">
              <p>Communication</p>
              <p className="font-bold text-3xl text-[#5A6EE6]">38</p>
            </div>
          </div>
        </div>
      </section>
      <AlarmSub />
    </Layout>
  );
};

export default page;
