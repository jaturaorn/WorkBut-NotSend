import Image from "next/image";

import Layout from "../component/layout";

import Singlane from "../../../public/asset/img/sld.png";

const page = () => {
  return (
    <Layout>
      <div className="flex justify-start ml-[165px]">
        <div
          className="w-[1350px] h-screen shadow-lg flex p-2 
border border-slate-300 bg-white mt-2"
        >
          <Image
            src={Singlane}
            width={800}
            height={800}
            alt="Singlane"
            className="w-full h-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export default page;
