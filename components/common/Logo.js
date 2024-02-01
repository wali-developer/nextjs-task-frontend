import React from "react";
import { RiSettings4Fill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.iconWrapper}>
        <RiSettings4Fill className={Styles.icon} />
      </div>
      <h6 className={Styles.text}>ZinTools</h6>
    </div>
  );
};

// Styles classes
const Styles = {
  wrapper: "flex gap-x-2 items-center",
  iconWrapper:
    "w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-dodgerBlue dark:bg-gray-200 rounded-lg inline-flex justify-center items-center",
  icon: "text-2xl sm:text-4xl text-white dark:text-dodgerBlue",
  text: "text-xl sm:text-2xl font-extrabold text-black dark:text-gray-200",
};

export default Logo;
