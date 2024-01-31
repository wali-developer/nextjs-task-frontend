"use client";

import ConversionCard from "@/components/common/ConversionCard";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ConvertToPDF = () => {
  const pdfConversions = [
    {
      title: "Word to PDF",
      desc: "Easily convert PDF to Word document",
      icon: "/icons/word-pdf.svg",
    },
    {
      title: "PPT to PDF",
      desc: "Convert PDF to Powerpoint online",
      icon: "/icons/ppt-pdf.svg",
    },
    {
      title: "Excel to PDF",
      desc: "Convert PDF to xls for free",
      icon: "/icons/excel-pdf.svg",
    },
    {
      title: "JPG to PDF",
      desc: "Convert PDF to a set of opimized JPG, PNG, BMP, GIF, or TIFF images.",
      icon: "/icons/jpg-pdf.svg",
    },
    {
      title: "TXT to PDF",
      desc: "Convert your PDF to TXT and extract text from your PDF.",
      icon: "/icons/Image-txt.svg",
    },
  ];
  return (
    <section className="w-full bg-white pb-16">
      <div className="container-lg">
        <h1 className="text-xl sm:text-2xl lg:text-3xl/9 font-bold text-darkText font-harmony">
          Convert to PDF
        </h1>
      </div>
      <div className="container-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 mt-5 sm:mt-7">
          {pdfConversions.map((item, index) => (
            <ConversionCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConvertToPDF;
