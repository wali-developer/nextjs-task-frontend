import Link from "next/link";
import React from "react";

const Menu = () => {
  const menu = [
    { name: "Stock Video", path: "#" },
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
    <div className="container-lg">
      <ul className="list-none flex gap-x-5 py-6 items-center justify-between">
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <span className="text-base font-medium text-gray-600 hover:scale-105 transition-all duration-500 inline-block">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
