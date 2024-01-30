import React from "react";
import { RiSettings4Fill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-dodgerBlue rounded-lg inline-flex justify-center items-center">
        <RiSettings4Fill className="text-2xl sm:text-4xl text-white" />
      </div>
      <h6 className="text-xl sm:text-2xl font-extrabold text-black">
        ZinTools
      </h6>
    </div>
  );
};

export default Logo;
