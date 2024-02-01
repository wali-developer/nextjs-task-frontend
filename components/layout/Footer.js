import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../common/Logo";
import ThemeButton from "../common/ThemeButton";
import layoutStyles from "./style";

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
    <footer className={layoutStyles.footerWrapper}>
      <div className="container-xl">
        <div className={layoutStyles.socialWrapper}>
          <h6 className={layoutStyles.followUs}>Follow us</h6>
          <Link href="https://www.youtube.com/" target="_blank">
            <FaYoutube className={layoutStyles.socialIcon} />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <FaTwitter className={layoutStyles.socialIcon} />
          </Link>
          <Link href="https://www.facebook.com/" target="_blank">
            <FaFacebookF className={layoutStyles.socialIcon} />
          </Link>
        </div>
        <div className={layoutStyles.footerGrid}>
          <LinksComponent title="Internal Links" links={internalLInks} />
          <LinksComponent title="Enterprise" links={enterpriseLinks} />
          <LinksComponent title="Internal Links" links={internalLInks} />
          <LinksComponent title="Enterprise" links={enterpriseLinks} />
          <LinksComponent title="Internal Links" links={internalLInks} />
        </div>
        <div className={layoutStyles.miniFooter}>
          <Logo />
          <div className={layoutStyles.miniFooterFlex}>
            <ul className={layoutStyles.miniFooterList}>
              {footerMenuLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span className={layoutStyles.miniFooterLink}>
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

const LinksComponent = ({ title, links }) => {
  return (
    <div>
      <h6 className={layoutStyles.footerColHeading}>{title}</h6>
      <ul className={layoutStyles.footerMenu}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>
              <span className={layoutStyles.footerLink}>{link?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
