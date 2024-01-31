import React from "react";
import { RiSettings4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import Logo from "../common/Logo";

const Navbar = ({ onOpenMenu }) => {
  return (
    <nav className="w-full h-[75px]">
      <div className="container-lg h-full">
        <div className="h-full flex flex-wrap justify-between items-center">
          <Logo />
          <div className="hidden bg-lightBg h-[48px] rounded-full px-7 w-[540px] py-2 max-w-full lg:flex justify-between items-center">
            <input
              type="text"
              placeholder="Search for Movies, TV Shows, Themes & Cast"
              className="text-base w-full h-full bg-transparent focus:outline-none border-r"
            />
            <span className="text-2xl text-black ml-6">
              <IoSearch />
            </span>
          </div>
          <div className="flex gap-x-4 sm:gap-x-7 items-center ml-auto lg:ml-0">
            <span className="block lg:hidden text-2xl text-black ml-6">
              <IoSearch />
            </span>
            <button className="text-sm sm:text-base  font-medium text-gray-500">
              Log in
            </button>
            <button className="bg-dodgerBlue text-white h-[36px] sm:h-[44px] rounded-full px-5 sm:px-7 text-sm sm:text-base ">
              Sign up
            </button>
            {/* Menu Bar button below medium screen */}
            <button
              className="text-xl text-black block lg:hidden"
              onClick={onOpenMenu}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
