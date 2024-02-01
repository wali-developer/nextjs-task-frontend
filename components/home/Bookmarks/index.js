"use client";

import BookmarksCard from "@/components/common/ConversionCard";
import { bookmarksArray } from "@/utils/data";
import React from "react";

const Bookmarks = () => {
  return (
    <section className={Styles.wrapper}>
      <div className="container-lg">
        <h1 className={Styles.heading}>Your Bookmarks</h1>
      </div>
      <div className="container-lg">
        <div className={Styles.grid}>
          {bookmarksArray.map((item, index) => (
            <BookmarksCard key={index} data={item} bookmarked={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles classes
const Styles = {
  wrapper: "w-full bg-white dark:bg-darkBg pt-8 pb-8 sm:pt-16 sm:pb-10",
  heading:
    "text-xl sm:text-2xl lg:text-3xl/9 font-bold text-darkText dark:text-white font-harmony",
  grid: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 mt-4 sm:mt-7",
};

export default Bookmarks;
