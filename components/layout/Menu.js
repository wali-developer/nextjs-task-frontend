import Link from "next/link";
import React from "react";
import DropdownItem from "./DropdownItem";

const Menu = () => {
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
    { name: "Video Templates", path: "#" },
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
    <div className="container-lg ">
      <ul className="list-none flex gap-x-5 items-center justify-between -ml-2">
        {menu.map((item, index) =>
          item?.subMenu?.length > 0 ? (
            <DropdownItem item={item} key={index} />
          ) : (
            <li
              key={index}
              className="inline-block border-b-2 border-white hover:border-[#523ee8] py-5 transition-all duration-500 px-2"
            >
              <Link href={item.path}>
                <span className="text-sm font-medium text-gray-600">
                  {item.name}
                </span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Menu;
