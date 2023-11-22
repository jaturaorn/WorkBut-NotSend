import Layout from "../component/layout";

import OverviewP1 from "../componentOverview/OverviewP1";
import Generated_Equal1 from "../componentGenerate/Generated_Equal1";
import Realtime_parameter from "../componentRealtime/Realtime_parameter";
import Enegry from "../componentEnegry/Enegry";

const Page = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex justify-start mt-3 ml-[167px]">
          <div className="flex flex-col">
            <h3>Weather Station</h3>
            <OverviewP1 />
            <Generated_Equal1 />
            <Realtime_parameter />
            <Enegry />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
