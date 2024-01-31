import Image from "next/image";
import React from "react";

const ConversionCard = () => {
  return (
    <div className="px-3 pt-7 pb-12">
      <div className="w-full p-3 sm:p-7 border rounded-xl hover:shadow-xl transition-all duration-300">
        <Image
          src="/icons/pdf-word.svg"
          alt="Pdf to Word"
          width={65}
          height={65}
          className="w-[40px] md:w-[65px]"
        />
        <div className="mt-3 sm:mt-4">
          <h3 className="text-base md:text-xl font-bold text-darkText font-harmony">
            PDF to Word
          </h3>
          <p className="text-xs md:text-sm/5 mt-2 sm:mt-3 text-gray-400 font-harmony">
            Easily convert PDF to Word document.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversionCard;
