"use client";

import BookmarksCard from "@/components/common/ConversionCard";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Bookmarks = () => {
  const bookmarksArray = [
    {
      title: "Edit PDF",
      desc: "Easily convert PDF to Word document",
      icon: "/icons/pdf-word.svg",
    },
    {
      title: "Crop PDF",
      desc: "Convert PDF to Powerpoint online",
      icon: "/icons/pdf-ppt.svg",
    },
    {
      title: "Replace Text",
      desc: "Convert PDF to xls for free",
      icon: "/icons/pdf-excel.svg",
    },
    {
      title: "Rotate PDF",
      desc: "Convert PDF to a set of opimized JPG, PNG, BMP, GIF, or TIFF images.",
      icon: "/icons/pdf-jpg.svg",
    },
  ];
  return (
    <section className="w-full bg-white pt-16">
      <div className="container-lg xl:w-[79%]">
        <h1 className="text-xl sm:text-2xl lg:text-3xl/9 font-bold text-darkText font-harmony">
          Your Bookmarks
        </h1>
      </div>
      <div className="container-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {bookmarksArray.map((item, index) => (
            <BookmarksCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookmarks;
