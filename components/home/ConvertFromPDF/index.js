"use client";

import Slider from "react-slick";
import ConversionCard from "@/components/common/ConversionCard";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

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

  const pdfConversions = [
    {
      title: "PDF to Word",
      desc: "Easily convert PDF to Word document",
      icon: "/icons/pdf-word.svg",
    },
    {
      title: "PDF to PPT",
      desc: "Convert PDF to Powerpoint online",
      icon: "/icons/pdf-ppt.svg",
    },
    {
      title: "PDF to Excel",
      desc: "Convert PDF to xls for free",
      icon: "/icons/pdf-excel.svg",
    },
    {
      title: "PDF to JPG",
      desc: "Convert PDF to a set of opimized JPG, PNG, BMP, GIF, or TIFF images.",
      icon: "/icons/pdf-jpg.svg",
    },
    {
      title: "PDF to TXT",
      desc: "Convert your PDF to TXT and extract text from your PDF.",
      icon: "/icons/pdf-txt.svg",
    },
    {
      title: "PDF to RTF",
      desc: "Convert PDF to RTF online and free",
      icon: "/icons/pdf-rtf.svg",
    },
    {
      title: "PDF to Pages",
      desc: "Convert pdf to Mac and windows.",
      icon: "/icons/pdf-pages.svg",
    },
    {
      title: "PDF to HTML",
      desc: "Convert your PDF documents to HTML web page.",
      icon: "/icons/pdf-html.svg",
    },
    {
      title: "PDF to DXF",
      desc: "The best online tool to convert PDF to DXF online.",
      icon: "/icons/pdf-dxf.svg",
    },
    {
      title: "PDF to EPUB",
      desc: "Convert PDF file to EPUB ebook.",
      icon: "/icons/pdf-epub.svg",
    },
    {
      title: "OCR",
      desc: "Convert your scanned PDFs and images into editable Word, Excel, and PPT.",
      icon: "/icons/ocr.svg",
    },
  ];
  return (
    <section className="w-full bg-white py-16">
      <div className="container-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl/9 font-bold text-darkText font-harmony">
            Convert from PDF
          </h1>
          <div className="flex gap-x-1 items-center bg-lightBg rounded-full px-5 cursor-pointer py-2.5">
            <span className="text-xs text-darkText font-bold uppercase">
              All
            </span>
            <span className="text-darkText text-base">
              <FaAngleRight />
            </span>
          </div>
        </div>
      </div>
      <div className="container-lg xl:w-[79%]">
        <Slider {...sliderSettings}>
          {pdfConversions.map((item, index) => (
            <ConversionCard key={index} data={item} />
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
    <div
      className={
        "flex justify-center items-center border-[3px] border-black/50 rounded-full w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] absolute -right-2 lg:-right-4 bg-white md:-right-10 top-1/2 translate-y-[-70%] cursor-pointer"
      }
      onClick={onClick}
    >
      <IoArrowForward className="text-base sm:text-xl text-black/50" />
    </div>
  );
};

// Previous Arrow icon Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={
        "flex justify-center items-center border-[3px] border-black/50 rounded-full w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] absolute -left-2 lg:-left-4 bg-white md:-left-10 top-1/2 translate-y-[-70%] cursor-pointer z-[99]"
      }
      onClick={onClick}
    >
      <IoArrowBack className="text-base sm:text-xl text-black/50" />
    </div>
  );
};

export default ConvertFromPDF;
