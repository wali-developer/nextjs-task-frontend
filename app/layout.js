import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// React slick stylesheets
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });
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

export const metadata = {
  title: "Frontend Task with NextJS",
  description: "Frontend Task with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 box-border ${harmonyFonts.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
