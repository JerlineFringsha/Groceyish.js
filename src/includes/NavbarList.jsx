// import { NavLink } from "react-router-dom";
//  import { Home,  Percentage, Fire } from "@carbon/icons-react";
// const NavbarList = () => {
//   return (
//     <div className="flex">
//       <nav className="flex">
//         <ul className="flex space-x-4">

//           <li className="flex" >
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "font-bold text-primary flex items-center gap-x-2" : "text-black flex items-center gap-x-2"
//               }
//             >
//              <Home/>
//              Home
//             </NavLink>
//           </li>
//           <li className="flex ">
//             <NavLink
//               to="/featured"
//               className={({ isActive }) =>
//                 isActive ? "font-bold text-primary flex items-center gap-x-2" : "text-black flex items-center gap-x-2"
//               }
//             >
//               <Percentage/>
//               Featured
//             </NavLink>
//           </li>
//           <li className="flex">
//             <NavLink
//               to="/daily"
//               className={({ isActive }) =>
//                 isActive ? "font-bold text-primary flex items-center gap-x-2" : "text-black flex items-center gap-x-2"
//               }
//             >
//               <Fire/>
//               Daily Deals
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default NavbarList;
import { NavLink } from "react-router-dom";
import { Home, Percentage, Fire } from "@carbon/icons-react";
import { useState } from "react";

const NavbarList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <button
        className="md:hidden p-2 text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Menu Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-6 mt-4 md:mt-0`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary flex items-center gap-x-2"
                  : "text-black flex items-center gap-x-2"
              }
            >
              <Home />
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/featured"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary flex items-center gap-x-2"
                  : "text-black flex items-center gap-x-2"
              }
            >
              <Percentage />
              Featured
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/daily"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-primary flex items-center gap-x-2"
                  : "text-black flex items-center gap-x-2"
              }
            >
              <Fire />
              Daily Deals
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarList;

