// react icons
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import Navbarsub from "./Navbarsub";

const Navbar = () => {
  return (
    <nav
      className="h-[100px] w-full flex items-center justify-start 
    bg-white shadow-lg container mx-auto border-b-2"
    >
      <div className="flex flex-col w-full divide-y-2">
        <div className="flex justify-between items-center ml-[168px] mb-2">
          <p className="font-semibold text-indigo-700 text-lg">
            BGCG SOLAR FLOATING - 2.496 MWp
          </p>
          <div className="flex justify-end gap-x-5 mr-2">
            <CgProfile size={30} color="blue" />
            <MdOutlineLogout size={30} color="blue" />
          </div>
        </div>
        <Navbarsub />
      </div>
    </nav>
  );
};

export default Navbar;
