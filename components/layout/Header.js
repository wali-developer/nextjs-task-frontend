"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="shadow-md shadow-gray-200 sticky top-0 bg-white z-[999]">
      <Navbar isOpen={isOpen} onOpenMenu={() => setIsOpen(true)} />
      <Menu isOpen={isOpen} onCloseMenu={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
