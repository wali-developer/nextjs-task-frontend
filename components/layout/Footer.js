import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../common/Logo";
import { MdOutlineDarkMode } from "react-icons/md";
import ThemeButton from "../common/ThemeButton";

const Footer = () => {
  const internalLInks = [
    { name: "Documentaries", path: "#" },
    { name: "Themes", path: "#" },
    { name: "Chrome casts", path: "#" },
  ];
  const enterpriseLinks = [
    { name: "Download Chrome Browser", path: "#" },
    { name: "Chrome Browser for Enterprise", path: "#" },
    { name: "Chrome Browser Devices", path: "#" },
    { name: "ChromeOS", path: "#" },
    { name: "Google Cloud", path: "#" },
    { name: "Google Workspace", path: "#" },
  ];
  const footerMenuLinks = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms and conditions", path: "#" },
    { name: "Cookies Policy", path: "#" },
    { name: "About us", path: "#" },
    { name: "EULA", path: "#" },
    { name: "Contact", path: "#" },
  ];
  return (
    <footer className="bg-[#F1F3F4] w-full">
      <div className="container-xl">
        <div className="py-6 sm:py-8 border-b flex gap-x-8 items-center">
          <h6 className="text-base font-medium text-black">Follow us</h6>
          <Link href="https://www.youtube.com/" target="_blank">
            <FaYoutube className="text-xl sm:text-2xl text-black/70 hover:text-black" />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <FaTwitter className="text-xl sm:text-2xl text-black/70 hover:text-black" />
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <FaFacebookF className="text-xl sm:text-2xl text-black/70 hover:text-black" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-6 sm:py-9 border-b gap-y-10">
          <div>
            <h6 className="text-sm/5 sm:text-base/6 font-semibold text-black">
              Internal Links
            </h6>
            <ul className="list-none mt-4 sm:mt-7 flex flex-col gap-4">
              {internalLInks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-sm/5 sm:text-base/6 text-black/70 hover:text-black transition-all duration-300">
                      {link?.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-sm/5 sm:text-base/6 font-semibold text-black">
              Enterprise
            </h6>
            <ul className="list-none mt-4 sm:mt-7 flex flex-col gap-4">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-sm/5 sm:text-base/6 text-black/70 hover:text-black transition-all duration-300">
                      {link?.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-sm/5 sm:text-base/6 font-semibold text-black">
              Internal Links
            </h6>
            <ul className="list-none mt-4 sm:mt-7 flex flex-col gap-4">
              {internalLInks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-sm/5 sm:text-base/6 text-black/70 hover:text-black transition-all duration-300">
                      {link?.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-sm/5 sm:text-base/6 font-semibold text-black">
              Enterprise
            </h6>
            <ul className="list-none mt-4 sm:mt-7 flex flex-col gap-4">
              {enterpriseLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-sm/5 sm:text-base/6 text-black/70 hover:text-black transition-all duration-300">
                      {link?.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-sm/5 sm:text-base/6 font-semibold text-black">
              Internal Links
            </h6>
            <ul className="list-none mt-4 sm:mt-7 flex flex-col gap-4">
              {internalLInks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-sm/5 sm:text-base/6 text-black/70 hover:text-black transition-all duration-300">
                      {link?.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between flex-col sm:flex-row flex-wrap gap-y-4 items-center py-6 sm:py-9">
          <Logo />
          <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 items-center">
            <ul className="list-none flex flex-col sm:flex-row gap-x-5 md:gap-x-10 gap-y-5 items-center md:justify-end">
              {footerMenuLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className="text-sm/5 text-black/70 hover:underline hover:text-black transition-all duration-300">
                      {link?.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
