"use client";

import Slider from "react-slick";
import ConversionCard from "@/components/common/ConversionCard";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { pdfConversions } from "@/utils/data";
import fromPdfStyles from "./styles";

const ConvertFromPDF = () => {
  const sliderSettings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={fromPdfStyles.wrapper}>
      <div className="container-lg">
        <div className={fromPdfStyles.headingRow}>
          <h1 className={fromPdfStyles.heading}>Convert from PDF</h1>
          <div className={fromPdfStyles.allButton}>
            <span className={fromPdfStyles.btnText}>All</span>
            <span className={fromPdfStyles.icon}>
              <FaAngleRight />
            </span>
          </div>
        </div>
      </div>
      <div className={fromPdfStyles.slierContainer}>
        <Slider {...sliderSettings}>
          {pdfConversions.map((item, index) => (
            <ConversionCard
              key={index}
              data={item}
              className={fromPdfStyles.cardWrapper}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Next Arrow icon Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={fromPdfStyles.prevButton} onClick={onClick}>
      <IoArrowForward className={fromPdfStyles.prevIcon} />
    </div>
  );
};

// Previous Arrow icon Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={fromPdfStyles.nextButton} onClick={onClick}>
      <IoArrowBack className={fromPdfStyles.nextIcon} />
    </div>
  );
};

export default ConvertFromPDF;
