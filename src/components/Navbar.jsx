import { Headphones,  } from "@carbon/icons-react";

import NavbarList from "../includes/NavbarList";
import { GrDatabase } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 border-t-2 border-b-2 border-button mb-0">
        <div className="flex text-white bg-button rounded-md items-center p-4 gap-x-2">
        <GrDatabase size={25} />
          <p className="font-bold">Browse All Categories</p>
        </div>

        <div>
          <NavbarList />
        </div>

        <div className="flex justify-between gap-x-2">
          <Headphones className="text-primary font-bold" size={25} />
          <p className="text-primary font-semibold">1233-7777</p>
          <p>24/7 Support Center</p>
        </div>
      </div>

    </>
  );
};

export default Navbar;
