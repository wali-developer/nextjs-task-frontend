"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="w-12 h-12 rounded-full bg-[#DEDEDE] flex justify-center items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* {theme === "dark" ? (
        <FiSun className="text-xl text-black" />
      ) : ( */}
      <MdOutlineDarkMode className="text-xl text-black" />
      {/* )} */}
    </button>
  );
};

export default ThemeButton;
