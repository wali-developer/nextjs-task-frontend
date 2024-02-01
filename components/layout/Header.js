"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import layoutStyles from "./style";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={layoutStyles.header}>
      <Navbar isOpen={isOpen} onOpenMenu={() => setIsOpen(true)} />
      <Menu isOpen={isOpen} onCloseMenu={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
