import Image from "next/image";
import React from "react";
import { RiBookmarkLine } from "react-icons/ri";
import cardStyles from "./styles";

const ConversionCard = ({ data, className, bookmarked = false }) => {
  return (
    <div className={`${className}`}>
      <div className={cardStyles.wrapper}>
        <Image
          src={data.icon}
          alt="Pdf to Word"
          width={65}
          height={65}
          className={cardStyles.icon}
        />
        <div className="mt-3 sm:mt-4">
          <h3 className={cardStyles.heading}>{data.title}</h3>
          <p className={cardStyles.description}>{data.desc}</p>
        </div>
        {/* Bookmark button */}
        {!bookmarked && (
          <button className={cardStyles.bookmark}>
            <RiBookmarkLine className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ConversionCard;
