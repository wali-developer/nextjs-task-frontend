"use client";

import ConversionCard from "@/components/common/ConversionCard";
import { toPdfConversions } from "@/utils/data";
import React from "react";

const ConvertToPDF = () => {
  return (
    <section className={Styles.wrapper}>
      <div className="container-lg">
        <h1 className={Styles.heading}>Convert to PDF</h1>
      </div>
      <div className="container-lg">
        <div className={Styles.grid}>
          {toPdfConversions.map((item, index) => (
            <ConversionCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles classes
const Styles = {
  wrapper: "w-full bg-white dark:bg-darkBg pb-16",
  heading:
    "text-xl sm:text-2xl lg:text-3xl/9 font-bold text-darkText dark:text-white font-harmony",
  grid: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 mt-5 sm:mt-7",
};

export default ConvertToPDF;
