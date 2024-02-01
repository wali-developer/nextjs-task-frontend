import Link from "next/link";
import React from "react";
import DropdownItem from "./DropdownItem";
import { RxCross2 } from "react-icons/rx";
import layoutStyles from "./style";
import menu from "@/utils/menu";

const Menu = ({ isOpen, onCloseMenu }) => {
  return (
    <div className="container-xl">
      <ul
        className={`${layoutStyles.menu} ${
          isOpen ? "" : layoutStyles.visibleState
        }`}
      >
        {menu.map((item, index) =>
          item?.subMenu?.length > 0 ? (
            <DropdownItem item={item} key={index} />
          ) : (
            <li key={index} className={layoutStyles.menuItem}>
              <Link href={item.path}>
                <span className={layoutStyles.itemText}>{item.name}</span>
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Cross button below medium screen */}
      {isOpen && (
        <button className={layoutStyles.cross} onClick={onCloseMenu}>
          <RxCross2 />
        </button>
      )}
    </div>
  );
};

export default Menu;
