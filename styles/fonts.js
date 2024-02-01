import localFont from "next/font/local";

const harmonyFonts = localFont({
  src: [
    {
      path: "../public/fonts/HarmonyOS_Sans_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HarmonyOS_Sans_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HarmonyOS_Sans_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-harmony",
});

export default harmonyFonts;
