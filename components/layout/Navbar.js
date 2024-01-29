import React from "react";
import { RiSettings4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full bg-white h-[80px]">
      <div className="container-lg h-full">
        <div className="h-full flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <div className="w-[40px] h-[40px] bg-dodgerBlue rounded-lg inline-flex justify-center items-center">
              <RiSettings4Fill className="text-4xl text-white" />
            </div>
            <h6 className="2xl:text-2xl font-extrabold text-black">ZinTools</h6>
          </div>
          <div className="bg-lightBg h-[52px] rounded-full px-7 w-[540px] py-2 max-w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search for Movies, TV Shows, Themes & Cast"
              className="text-base w-full h-full bg-transparent focus:outline-none border-r"
            />
            <span className="text-2xl text-black ml-6">
              <IoSearch />
            </span>
          </div>
          <div className="flex gap-x-8 items-center">
            <button className="text-base 2xl:text-lg font-medium text-gray-500">
              Log in
            </button>
            <button className="bg-dodgerBlue text-white h-[52px] rounded-full px-7 text-base 2xl:text-lg">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
