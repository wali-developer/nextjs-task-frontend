import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="shadow-md shadow-gray-200 sticky top-0">
      <Navbar />
      <Menu />
    </header>
  );
};

export default Header;
