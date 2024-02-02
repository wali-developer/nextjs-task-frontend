"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import Logo from "../common/Logo";
import layoutStyles from "./style";
import MobileSearch from "./MobileSearch";

const Navbar = ({ onOpenMenu }) => {
  const [show, setShow] = useState(false);
  return (
    <nav className="w-full h-[75px]">
      <div className="container-xl h-full">
        <div className={layoutStyles.navbarWrapper}>
          <Logo />
          <div className={layoutStyles.searchWraper}>
            <input
              type="text"
              placeholder="Search for Movies, TV Shows, Themes & Cast"
              className={layoutStyles.search}
            />
            <span className={layoutStyles.iconWrapper}>
              <IoSearch className={layoutStyles.searchIcon} />
            </span>
          </div>
          <div className={layoutStyles.topButtons}>
            <span
              className={layoutStyles.mobileSearchIcon}
              onClick={() => setShow(true)}
            >
              <IoSearch />
            </span>
            <button className={layoutStyles.login}>Log in</button>
            <button className={layoutStyles.signup}>Sign up</button>
            {/* Menu Bar button below medium screen */}
            <button className={layoutStyles.bar} onClick={onOpenMenu}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Search on mobile */}
      <MobileSearch show={show} setShow={setShow} />
    </nav>
  );
};

export default Navbar;
