import Layout from "../component/layout";

import LineChart from "../component/Chart/LineChart";

const page = () => {
  return (
    <Layout>
      <div className="flex justify-start ml-[165px]">
        <div
          className="w-[1350px] h-screen shadow-lg flex p-2 
border border-slate-300 bg-white mt-2"
        >
          <div
            className="m-auto w-full max-sm:w-[355px] 
            max-sm:h-[200px] max-lg:w-[750px]"
          >
            <LineChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
