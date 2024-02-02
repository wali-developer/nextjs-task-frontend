"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const selectedTheme = theme === "light" ? "light" : "dark";
  return (
    <button
      className="w-12 h-12 rounded-full bg-[#DEDEDE] flex justify-center items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <MdOutlineDarkMode
        className={`text-xl text-black ${
          selectedTheme == "dark" ? "opacity-0 invisible w-0" : ""
        }`}
      />
      <FiSun
        className={`text-xl text-black ${
          selectedTheme == "light" ? "opacity-0 invisible w-0" : ""
        }`}
      />
    </button>
  );
};

export default ThemeButton;
