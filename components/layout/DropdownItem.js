"use client";

import Link from "next/link";
import React from "react";

const DropdownItem = ({ item }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <li
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="relative"
      >
        <div className="inline-block border-b-2 border-white hover:border-[#523ee8] py-5 transition-all duration-500 px-2">
          <Link href={item.path}>
            <span className="text-sm font-medium text-gray-600">
              {item.name}
            </span>
          </Link>
        </div>
        <ul
          className="list-none flex flex-col items-center absolute -left-8 top-full bg-white shadow-md w-40 transition-all duration-300"
          style={{
            height: visible ? item.subMenu?.length * 46 : 0,
            opacity: visible ? 1 : 0,
            visibility: visible ? "visible" : "hidden",
          }}
        >
          {item?.subMenu.map((sub, index) => (
            <li
              className="inline-block hover:text-[#523ee8] py-5 transition-all duration-500 px-2 h-8"
              key={index}
            >
              <Link href={sub.path}>
                <span className="text-sm text-gray-500">{sub.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default DropdownItem;
