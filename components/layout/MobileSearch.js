import React from "react";
import layoutStyles from "./style";

const MobileSearch = ({ show, setShow }) => {
  return (
    <div
      className={`${Styles.wrapper}  ${
        show ? Styles.visible : Styles.invisible
      }`}
    >
      <input
        type="text"
        placeholder="Search for Movies, TV Shows..."
        className={`${layoutStyles.search} `}
      />
      <span className={Styles.button} onClick={() => setShow(false)}>
        Cancel
      </span>
    </div>
  );
};

const Styles = {
  wrapper:
    "w-full h-full bg-white dark:bg-lightDark absolute top-0 flex justify-between items-center px-5 transition-all duration-500",
  button: "text-sm text-gray-500 dark:text-white ml-5 cursor-pointer",
  visible: "h-full opacity-100 visible",
  invisible: "h-0 opacity-0 invisible",
};

export default MobileSearch;
