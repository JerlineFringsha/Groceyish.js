import { Search, ShoppingCart, Login } from "@carbon/icons-react";
import logo from "../assets/logo.svg";

const Topbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-4 items-center justify-between">
        <div className="flex flex-row">
          <a
            href="#"
            className=" flex flex-row items-center no-underline text-black"
          >
            <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
            <p className="text-primary text-lg font-semibold">Groceyish</p>
          </a>
        </div>

        <div className="w-full md:w-1/2 items-center flex mb-4 md:mb-0">
          <form className="flex border border-primary rounded-md  w-full p-2 items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-grow  p-2 outline-none"
            />
            <Search size={32} className="text-primary"/>
          </form>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <ShoppingCart size={32} />
            <p className="ml-2">Cart</p>
          </div>
          <div className="bg-button rounded-md flex items-center">
            <a href="#" className="flex flex-row  items-center p-2  text-white">
              <Login size={32} />
              <p className="ml-2">Login</p>
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Topbar;
