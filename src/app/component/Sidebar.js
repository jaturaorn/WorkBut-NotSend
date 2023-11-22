import Image from "next/image";
import Link from "next/link";

// Image
import Logo from "../../../public/asset/img/BGCG_Logo.png";

// react-icons
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdElectricBolt } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import { BsBarChartLine } from "react-icons/bs";
import { IoDocumentsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside
      className="fixed inset-y-18 left-0 h-full z-10
    bg-white w-[160px] shadow-lg gap-y-5 p-2 items-center"
    >
      <Link
        href="/"
        className="h-10 max-w-sm flex justify-start rounded-lg 
      cursor-pointer hover:text-white hover:bg-sky-400 hover:duration-300 
      hover:ease-linear gap-x-3 items-center"
      >
        <AiOutlineMenu size={26} />
        <Image src={Logo} alt="logo" width="100" height="100" />
      </Link>

      <Link
        href="/overview"
        className="h-10 max-w-sm flex items-center justify-start rounded-lg 
      cursor-pointer hover:bg-sky-400 hover:text-white hover:duration-300 
      hover:ease-linear gap-x-3"
      >
        <AiOutlineHome size={23} />
        <p className="text-lg font-semibold">Overview</p>
      </Link>

      <Link
        href="/singleline"
        className="h-10 max-w-sm flex items-center justify-start 
        rounded-lg cursor-pointer hover:bg-sky-400 hover:text-white hover:duration-300 
      hover:ease-linear gap-x-3"
      >
        <LiaProjectDiagramSolid size={23} />
        <p className="text-lg font-semibold">Single Line</p>
      </Link>

      <Link
        href="/inverter"
        className="h-10 max-w-sm flex items-center justify-start rounded-lg 
      cursor-pointer hover:bg-sky-400 hover:text-white hover:duration-300 
      hover:ease-linear gap-x-3"
      >
        <MdElectricBolt size={23} />
        <p className="text-lg font-semibold">Inverter</p>
      </Link>
      <Link
        href="/alarm"
        className="h-10 max-w-sm flex items-center justify-start rounded-lg 
      cursor-pointer hover:bg-sky-400 hover:text-white hover:duration-300 
      hover:ease-linear gap-x-3"
      >
        <CiWarning size={23} />
        <p className="text-lg font-semibold">Alarm</p>
      </Link>
      <Link
        href="/trend"
        className="h-10 max-w-sm flex items-center justify-start rounded-lg 
      cursor-pointer hover:bg-sky-400 hover:text-white hover:duration-300 
      hover:ease-linear gap-x-3"
      >
        <BsBarChartLine size={23} />
        <p className="text-lg font-semibold">Trend</p>
      </Link>
      <Link
        href="/report"
        className="h-10 max-w-sm flex items-center justify-start rounded-lg 
      cursor-pointer hover:bg-sky-400 hover:text-white hover:duration-300 
      hover:ease-linear gap-x-3"
      >
        <IoDocumentsOutline size={23} />
        <p className="text-lg font-semibold">Report</p>
      </Link>
    </aside>
  );
};

export default Sidebar;
