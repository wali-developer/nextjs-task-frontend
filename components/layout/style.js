const layoutStyles = {
  header:
    "shadow-md shadow-gray-200 dark:shadow-gray-800 sticky top-0 bg-white dark:bg-darkBg z-[999]",
  navbarWrapper: "h-full flex flex-wrap justify-between items-center",
  searchWraper:
    "hidden bg-lightBg dark:bg-lightDark h-[48px] rounded-full px-7 w-[540px] py-2 max-w-full lg:flex justify-between items-center",
  search:
    "text-base w-full h-full bg-transparent focus:outline-none border-r dark:border-gray-600",
  iconWrapper: "text-2xl text-black ml-6",
  searchIcon: "text-darkText dark:text-gray-200",
  topButtons: "flex gap-x-4 sm:gap-x-7 items-center ml-auto lg:ml-0",
  login: "text-sm sm:text-base  font-medium text-gray-500 dark:text-gray-200",
  signup:
    "bg-dodgerBlue text-white h-[36px] sm:h-[44px] rounded-full px-5 sm:px-7 text-sm sm:text-base",
  bar: "text-xl text-black block lg:hidden dark:text-gray-300",
  menu: "list-none flex gap-x-5 items-center xl:justify-between flex-wrap z-[99] fixed top-0 right-0 bg-dodgerBlue w-full h-full lg:static lg:bg-transparent flex-col lg:flex-row gap-y-7 justify-center transition-all duration-300 lg:px-8 xl:px-12",
  visibleState:
    "invisible opacity-0 w-0 lg:opacity-100 lg:flex md:w-full lg:h-full lg:visible",
  menuItem:
    "inline-block lg:border-b-2 lg:border-white dark:lg:border-darkBg hover:border-dodgerBlue lg:pb-5 lg:pt-5 transition-all duration-500 px-2",
  itemText:
    "text-sm font-medium text-white lg:text-gray-600 lg:dark:text-gray-200",
  cross: "absolute top-5 right-5 text-2xl text-white z-[99]",
  footerWrapper: "bg-[#F1F3F4] dark:bg-darkBg w-full",
  socialWrapper:
    "py-6 sm:py-8 border-b dark:border-gray-800 flex gap-x-8 items-center",
  followUs: "text-base font-medium text-black dark:text-white",
  socialIcon:
    "text-xl sm:text-2xl text-black/70 dark:text-gray-400 hover:dark:text-white hover:text-black",
  footerGrid:
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6 sm:py-9 border-b dark:border-gray-800 gap-y-10",
  footerColHeading:
    "text-sm/5 sm:text-base/6 font-semibold text-black dark:text-white",
  footerMenu: "list-none mt-4 sm:mt-7 flex flex-col gap-4",
  footerLink:
    "text-sm/5 sm:text-base/6 text-black/70 hover:text-black dark:text-gray-400 hover:dark:text-white transition-all duration-300",
  miniFooter:
    "flex justify-between flex-col sm:flex-row flex-wrap gap-y-4 items-center py-6 sm:py-9",
  miniFooterFlex: "flex flex-col md:flex-row gap-y-5 gap-x-10 items-center",
  miniFooterList:
    "list-none flex flex-col sm:flex-row gap-x-5 md:gap-x-10 gap-y-5 items-center md:justify-end",
  miniFooterLink:
    "text-sm/5 text-black/70 hover:underline hover:text-black dark:text-gray-400 hover:dark:text-white transition-all duration-300",
};

export default layoutStyles;
