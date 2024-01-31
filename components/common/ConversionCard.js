import Image from "next/image";
import React from "react";
import { RiBookmarkLine } from "react-icons/ri";

const ConversionCard = ({ data }) => {
  return (
    <div className="px-3 pt-7 pb-12">
      <div className="w-full h-[160px] sm:h-[200px] md:h-[230px] p-3 sm:px-6 sm:py-7 border rounded-xl hover:shadow-xl transition-all duration-300 relative group">
        <Image
          src={data.icon}
          alt="Pdf to Word"
          width={65}
          height={65}
          className="w-[40px] md:w-[65px]"
        />
        <div className="mt-3 sm:mt-4">
          <h3 className="text-base md:text-xl font-bold text-darkText font-harmony">
            {data.title}
          </h3>
          <p className="text-xs md:text-sm/5 mt-2 sm:mt-3 text-gray-400 font-harmony">
            {data.desc}
          </p>
        </div>
        {/* Bookmark button */}
        <button
          className={`absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300`}
        >
          <RiBookmarkLine className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ConversionCard;
