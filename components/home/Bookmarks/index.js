"use client";

import BookmarksCard from "@/components/common/ConversionCard";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Bookmarks = () => {
  const bookmarksArray = [
    {
      title: "Edit PDF",
      desc: "Use the best online tool to edit PDFs in your browser",
      icon: "/icons/pdf-word.svg",
    },
    {
      title: "Crop PDF",
      desc: "Crop PDF online to a selected area, adjust margin size...",
      icon: "/icons/pdf-ppt.svg",
    },
    {
      title: "Replace Text",
      desc: "The easiest way to replace text online.",
      icon: "/icons/pdf-excel.svg",
    },
    {
      title: "Rotate PDF",
      desc: "Rotate and save your PDF pages online for free.",
      icon: "/icons/pdf-jpg.svg",
    },
  ];
  return (
    <section className="w-full bg-white pt-8 pb-8 sm:pt-16 sm:pb-10">
      <div className="container-lg">
        <h1 className="text-xl sm:text-2xl lg:text-3xl/9 font-bold text-darkText font-harmony">
          Your Bookmarks
        </h1>
      </div>
      <div className="container-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 mt-4 sm:mt-7">
          {bookmarksArray.map((item, index) => (
            <BookmarksCard key={index} data={item} bookmarked={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookmarks;
