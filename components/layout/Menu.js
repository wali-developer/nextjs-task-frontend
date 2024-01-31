"use client";

import Link from "next/link";
import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";

const Menu = ({ isOpen, onCloseMenu }) => {
  const menu = [
    {
      name: "Stock Video",
      path: "#",
      subMenu: [
        { name: "Stock Footage", path: "#" },
        { name: "Stock Footage", path: "#" },
        { name: "Stock Footage", path: "#" },
        { name: "Stock Footage", path: "#" },
      ],
    },
    {
      name: "Video Templates",
      path: "#",
      subMenu: [
        { name: "After Effects", path: "#" },
        { name: "After Effects", path: "#" },
        { name: "After Effects", path: "#" },
      ],
    },
    { name: "Music", path: "#" },
    { name: "Sound Effects", path: "#" },
    { name: "Graphic Templates", path: "#" },
    { name: "Graphics", path: "#" },
    { name: "Presentation Templates", path: "#" },
    { name: "Photos", path: "#" },
    { name: "Fonts", path: "#" },
    { name: "Add-ons", path: "#" },
    { name: "More", path: "#" },
  ];
  return (
    <div className="container-xl">
      <ul
        className={`list-none flex gap-x-5 items-center xl:justify-between flex-wrap z-[99] fixed top-0 right-0 bg-dodgerBlue w-full h-full lg:static lg:bg-transparent flex-col lg:flex-row gap-y-7 justify-center transition-all duration-300 lg:px-8 xl:px-12 ${
          isOpen
            ? ""
            : "invisible opacity-0 w-0 lg:opacity-100 lg:flex md:w-full lg:h-full lg:visible"
        }`}
      >
        {menu.map((item, index) =>
          item?.subMenu?.length > 0 ? (
            <DropdownItem item={item} key={index} />
          ) : (
            <li
              key={index}
              className="inline-block lg:border-b-2 lg:border-white hover:border-dodgerBlue lg:pb-5 lg:pt-5 transition-all duration-500 px-2"
            >
              <Link href={item.path}>
                <span className="text-sm font-medium text-white lg:text-gray-600">
                  {item.name}
                </span>
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Cross button below medium screen */}
      {isOpen && (
        <button
          className="absolute top-5 right-5 text-2xl text-white z-[99]"
          onClick={onCloseMenu}
        >
          <RxCross2 />
        </button>
      )}
    </div>
  );
};

export default Menu;
